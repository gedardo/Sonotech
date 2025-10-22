/*
  # Crear tabla de productos para Levelpro

  1. Nueva tabla
    - `products`
      - `id` (uuid, primary key)
      - `name` (text) - Nombre del producto
      - `description` (text) - Descripción detallada
      - `price` (numeric) - Precio del producto
      - `image_url` (text) - URL de la imagen
      - `category` (text) - Categoría del producto
      - `in_stock` (boolean) - Si está en stock
      - `featured` (boolean) - Si es producto destacado
      - `created_at` (timestamp)
      - `updated_at` (timestamp)

  2. Seguridad
    - Enable RLS on `products` table
    - Add policy for public read access
    - Add policy for authenticated users to insert/update/delete
*/

CREATE TABLE IF NOT EXISTS products (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  description text NOT NULL,
  price numeric(10,2) NOT NULL CHECK (price >= 0),
  image_url text NOT NULL,
  category text NOT NULL,
  in_stock boolean DEFAULT true,
  featured boolean DEFAULT false,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE products ENABLE ROW LEVEL SECURITY;

-- Allow public read access to products
CREATE POLICY "Anyone can read products"
  ON products
  FOR SELECT
  TO public
  USING (true);

-- Allow authenticated users to insert products
CREATE POLICY "Authenticated users can insert products"
  ON products
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

-- Allow authenticated users to update products
CREATE POLICY "Authenticated users can update products"
  ON products
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Allow authenticated users to delete products
CREATE POLICY "Authenticated users can delete products"
  ON products
  FOR DELETE
  TO authenticated
  USING (true);

-- Create function to automatically update updated_at
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ language 'plpgsql';

-- Create trigger to automatically update updated_at
CREATE TRIGGER update_products_updated_at
  BEFORE UPDATE ON products
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- Insert sample products for Levelpro
INSERT INTO products (name, description, price, image_url, category, in_stock, featured) VALUES
  (
    'Amplificador Pioneer DJ DJM-900NXS2',
    'Mezclador profesional de 4 canales con efectos integrados, conectividad USB y calidad de sonido excepcional para DJs profesionales.',
    2500000,
    'https://images.pexels.com/photos/1201694/pexels-photo-1201694.jpeg?auto=compress&cs=tinysrgb&w=800',
    'Amplificadores',
    true,
    true
  ),
  (
    'Parlante JBL PRX815W',
    'Sistema de altavoces activo de 15 pulgadas con tecnología inalámbrica, ideal para eventos y presentaciones profesionales.',
    1800000,
    'https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=800',
    'Parlantes',
    true,
    true
  ),
  (
    'Micrófono Shure SM58',
    'Micrófono dinámico cardioide legendario, estándar de la industria para voces en vivo y grabación de estudio.',
    450000,
    'https://images.pexels.com/photos/1407322/pexels-photo-1407322.jpeg?auto=compress&cs=tinysrgb&w=800',
    'Micrófonos',
    true,
    false
  ),
  (
    'Consola Yamaha MG16XU',
    'Mezcladora analógica de 16 canales con efectos integrados, compresores en los canales mono y interfaz USB.',
    1200000,
    'https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=800',
    'Consolas',
    true,
    true
  ),
  (
    'Proyector Epson PowerLite Pro G7905U',
    'Proyector láser WUXGA de 7000 lúmenes para instalaciones profesionales y eventos corporativos de gran escala.',
    3200000,
    'https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=800',
    'Proyectores',
    true,
    false
  ),
  (
    'Kit de Luces LED CHAUVET DJ 4BAR Flex T USB',
    'Sistema de iluminación LED compacto y versátil con control remoto inalámbrico y múltiples efectos de color.',
    850000,
    'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=800',
    'Iluminación',
    true,
    false
  ),
  (
    'Cable XLR Mogami 2534',
    'Cable de audio balanceado profesional de 5 metros, construcción robusta y excelente calidad de señal.',
    120000,
    'https://images.pexels.com/photos/1751731/pexels-photo-1751731.jpeg?auto=compress&cs=tinysrgb&w=800',
    'Accesorios',
    true,
    false
  ),
  (
    'Subwoofer QSC KS212C',
    'Subwoofer activo cardioide de doble 12 pulgadas, diseñado para aplicaciones que requieren graves potentes y controlados.',
    2100000,
    'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=800',
    'Parlantes',
    false,
    false
  );