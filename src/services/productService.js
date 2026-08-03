import { supabase } from '../lib/supabaseClient'

/**
 * Convierte un texto en un slug URL-friendly
 * Ejemplo: "Aventus Creed 100ml" -> "aventus-creed-100ml"
 */
export function generateSlug(text) {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // Eliminar diacríticos (acentos)
    .replace(/\s+/g, '-') // Espacios a guiones
    .replace(/[^\w\-]+/g, '') // Eliminar caracteres especiales
    .replace(/\-\-+/g, '-') // Eliminar múltiples guiones
    .replace(/^-+/, '') // Trim inicio
    .replace(/-+$/, '') // Trim final
}

/**
 * Crea un perfume en la tabla 'perfumes'
 * @param {Object} productData 
 * @returns {Promise<Object>} El objeto perfume creado
 */
export async function createProduct(productData) {
  const {
    name,
    brand,
    description,
    characteristics,
    price,
    stock,
    category_id,
    featured = false,
    new_arrival = false,
  } = productData

  const slug = generateSlug(name)

  const { data, error } = await supabase
    .from('perfumes')
    .insert([
      {
        name,
        slug,
        brand,
        description,
        characteristics,
        price: Number(price),
        stock: Number(stock),
        category_id: category_id || null,
        featured,
        new_arrival,
        is_active: true,
      },
    ])
    .select()
    .single()

  if (error) {
    console.error('Error al crear el producto:', error)
    throw new Error(`Error en base de datos: ${error.message}`)
  }

  return data
}

/**
 * Guarda el registro de una imagen en la tabla 'images' de Supabase
 * @param {Object} imageData 
 */
export async function saveProductImage({ perfume_id, image_url, is_main = false, sort_order = 0, alt = '' }) {
  const { data, error } = await supabase
    .from('images')
    .insert([
      {
        perfume_id,
        image_url,
        is_main,
        sort_order,
        alt: alt || 'Imagen de producto',
      },
    ])
    .select()
    .single()

  if (error) {
    console.error('Error al guardar la imagen en Supabase:', error)
    throw new Error(`Error guardando imagen: ${error.message}`)
  }

  return data
}
