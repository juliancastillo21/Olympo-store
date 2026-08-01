import { supabase } from '../lib/supabaseClient'

/**
 * Solicita una URL firmada a la Edge Function de Supabase y sube el archivo a Cloudflare R2
 * @param {File} file - El archivo a subir
 * @returns {Promise<string>} - La URL pública de la imagen subida
 */
export async function uploadProductImage(file) {
  try {
    // 1. Obtener la URL firmada desde nuestra Edge Function
    const { data: signedData, error: signedError } = await supabase.functions.invoke('generate-r2-url', {
      body: JSON.stringify({
        filename: file.name,
        contentType: file.type,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    })

    if (signedError) {
      throw new Error(`Error invocando Edge Function: ${signedError.message}`)
    }

    if (signedData.error) {
       throw new Error(`Error de la Edge Function: ${signedData.error}`)
    }

    const { url, fileKey } = signedData

    // 2. Subir el archivo directamente a Cloudflare R2 usando la URL firmada
    const uploadResponse = await fetch(url, {
      method: 'PUT',
      headers: {
        'Content-Type': file.type,
      },
      body: file,
    })

    if (!uploadResponse.ok) {
      throw new Error(`Error subiendo a R2: ${uploadResponse.statusText}`)
    }

    // 3. Retornar la URL pública de la imagen
    // Usamos el dominio que configuraste en tu .env
    const publicDomain = import.meta.env.VITE_CLOUDFLARE_IMAGE_DELIVERY
    if (!publicDomain) {
      throw new Error('No has configurado VITE_CLOUDFLARE_IMAGE_DELIVERY en el .env')
    }
    
    // Asegurarse de que el publicDomain no termine en / para evitar dobles //
    const baseUrl = publicDomain.replace(/\/$/, '')
    const finalImageUrl = `${baseUrl}/${fileKey}`

    return finalImageUrl

  } catch (error) {
    console.error('Upload Error:', error)
    throw error
  }
}
