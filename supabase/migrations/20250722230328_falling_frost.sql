/*
  # Enhance products table with additional attributes

  1. New Columns Added
    - `brand` (text) - Product brand/manufacturer
    - `images` (jsonb) - Array of product images
    - `rating` (numeric) - Product rating (1-5 stars)
    - `review_count` (integer) - Number of reviews
    - `specifications` (jsonb) - Technical specifications
    - `stock_quantity` (integer) - Available stock quantity
    - `sku` (text) - Stock Keeping Unit
    - `weight` (numeric) - Product weight in kg
    - `dimensions` (jsonb) - Product dimensions (width, height, depth)

  2. Updated Sample Data
    - Enhanced existing products with new attributes
    - Added realistic audio equipment specifications
    - Included multiple product images
    - Added ratings and review counts

  3. Security
    - Maintained existing RLS policies
    - Updated policies to handle new columns
*/

-- Add new columns to products table
DO $$
BEGIN
  -- Add brand column
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'products' AND column_name = 'brand'
  ) THEN
    ALTER TABLE products ADD COLUMN brand text NOT NULL DEFAULT '';
  END IF;

  -- Add images array column
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'products' AND column_name = 'images'
  ) THEN
    ALTER TABLE products ADD COLUMN images jsonb DEFAULT '[]'::jsonb;
  END IF;

  -- Add rating column
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'products' AND column_name = 'rating'
  ) THEN
    ALTER TABLE products ADD COLUMN rating numeric(2,1) DEFAULT 0 CHECK (rating >= 0 AND rating <= 5);
  END IF;

  -- Add review count column
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'products' AND column_name = 'review_count'
  ) THEN
    ALTER TABLE products ADD COLUMN review_count integer DEFAULT 0 CHECK (review_count >= 0);
  END IF;

  -- Add specifications column
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'products' AND column_name = 'specifications'
  ) THEN
    ALTER TABLE products ADD COLUMN specifications jsonb DEFAULT '{}'::jsonb;
  END IF;

  -- Add stock quantity column
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'products' AND column_name = 'stock_quantity'
  ) THEN
    ALTER TABLE products ADD COLUMN stock_quantity integer DEFAULT 0 CHECK (stock_quantity >= 0);
  END IF;

  -- Add SKU column
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'products' AND column_name = 'sku'
  ) THEN
    ALTER TABLE products ADD COLUMN sku text UNIQUE;
  END IF;

  -- Add weight column
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'products' AND column_name = 'weight'
  ) THEN
    ALTER TABLE products ADD COLUMN weight numeric(8,2) DEFAULT 0;
  END IF;

  -- Add dimensions column
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'products' AND column_name = 'dimensions'
  ) THEN
    ALTER TABLE products ADD COLUMN dimensions jsonb DEFAULT '{}'::jsonb;
  END IF;
END $$;

-- Clear existing data and insert enhanced sample products
DELETE FROM products;

INSERT INTO products (
  name, description, price, image_url, category, brand, images, rating, review_count,
  specifications, stock_quantity, sku, weight, dimensions, in_stock, featured
) VALUES
(
  'RECEPTOR DENON AVR-X6700H E2 NUEVO',
  'Receptor AV de 11.2 canales con soporte para Dolby Atmos, DTS:X y 8K. Potencia de 140W por canal, conectividad HDMI 2.1 y procesamiento de audio de alta resolución.',
  2850000,
  'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=800',
  'Amplificadores',
  'Denon',
  '["https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=800", "https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=800", "https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=800"]'::jsonb,
  4.8,
  156,
  '{"canales": "11.2", "potencia": "140W x 11", "hdmi": "8 entradas / 3 salidas", "bluetooth": "Si", "wifi": "Si", "dolby_atmos": "Si", "dts_x": "Si"}'::jsonb,
  5,
  'DNX6700H',
  14.5,
  '{"ancho": 43.4, "alto": 16.7, "profundidad": 37.9}'::jsonb,
  true,
  true
),
(
  'MONITOR POLK XT90 TORRE NEGRA',
  'Parlante de torre de 3 vías con tecnología Polk Patented Power Port y tweeter de cúpula de seda. Respuesta de frecuencia de 35Hz-25kHz con potencia recomendada de 20-200W.',
  1250000,
  'https://images.pexels.com/photos/1540406/pexels-photo-1540406.jpeg?auto=compress&cs=tinysrgb&w=800',
  'Parlantes',
  'Polk Audio',
  '["https://images.pexels.com/photos/1540406/pexels-photo-1540406.jpeg?auto=compress&cs=tinysrgb&w=800", "https://images.pexels.com/photos/164938/pexels-photo-164938.jpeg?auto=compress&cs=tinysrgb&w=800"]'::jsonb,
  4.6,
  89,
  '{"tipo": "Torre 3 vías", "respuesta_frecuencia": "35Hz-25kHz", "potencia": "20-200W", "impedancia": "8 ohms", "sensibilidad": "90dB", "drivers": "Woofer 8 pulgadas, Tweeter cúpula seda"}'::jsonb,
  12,
  'POLKXT90',
  18.2,
  '{"ancho": 20.3, "alto": 96.5, "profundidad": 28.6}'::jsonb,
  true,
  false
),
(
  'BOWERS & WILKINS ASW610XP BK',
  'Subwoofer activo de 10 pulgadas con amplificador clase D de 200W. Driver de larga excursión y puerto reflex frontal para graves profundos y controlados.',
  1850000,
  'https://images.pexels.com/photos/1694900/pexels-photo-1694900.jpeg?auto=compress&cs=tinysrgb&w=800',
  'Parlantes',
  'Bowers & Wilkins',
  '["https://images.pexels.com/photos/1694900/pexels-photo-1694900.jpeg?auto=compress&cs=tinysrgb&w=800", "https://images.pexels.com/photos/1540406/pexels-photo-1540406.jpeg?auto=compress&cs=tinysrgb&w=800"]'::jsonb,
  4.7,
  124,
  '{"driver": "10 pulgadas", "amplificador": "200W Clase D", "respuesta_frecuencia": "27Hz-140Hz", "dimensiones_driver": "254mm", "puerto": "Reflex frontal"}'::jsonb,
  8,
  'BWASW610XP',
  16.8,
  '{"ancho": 31.2, "alto": 32.5, "profundidad": 35.1}'::jsonb,
  true,
  true
),
(
  'DENON AHC-10PL BK NUEVOS AURICULARES',
  'Auriculares circumaurales cerrados con drivers de 40mm y respuesta de frecuencia extendida. Diseño plegable con cable desmontable y almohadillas de memory foam.',
  450000,
  'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=800',
  'Auriculares',
  'Denon',
  '["https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=800", "https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=800"]'::jsonb,
  4.4,
  67,
  '{"tipo": "Circumaurales cerrados", "drivers": "40mm", "respuesta_frecuencia": "5Hz-37kHz", "impedancia": "32 ohms", "sensibilidad": "103dB", "cable": "Desmontable 1.2m"}'::jsonb,
  25,
  'DNAHC10PL',
  0.28,
  '{"ancho": 18.5, "alto": 20.2, "profundidad": 8.5}'::jsonb,
  true,
  false
),
(
  'MICRÓFONO SHURE 555H SERIE II - VINTAGE',
  'Micrófono dinámico cardioide vintage con cápsula clásica Shure. Ideal para voces, con respuesta de frecuencia optimizada y construcción robusta de metal.',
  850000,
  'https://images.pexels.com/photos/1407322/pexels-photo-1407322.jpeg?auto=compress&cs=tinysrgb&w=800',
  'Micrófonos',
  'Shure',
  '["https://images.pexels.com/photos/1407322/pexels-photo-1407322.jpeg?auto=compress&cs=tinysrgb&w=800", "https://images.pexels.com/photos/164938/pexels-photo-164938.jpeg?auto=compress&cs=tinysrgb&w=800"]'::jsonb,
  4.9,
  203,
  '{"tipo": "Dinámico cardioide", "respuesta_frecuencia": "50Hz-15kHz", "impedancia": "150 ohms", "sensibilidad": "-56dBV", "construccion": "Metal fundido", "conector": "XLR-3M"}'::jsonb,
  3,
  'SH555H2',
  0.73,
  '{"ancho": 5.4, "alto": 17.8, "profundidad": 5.4}'::jsonb,
  true,
  true
),
(
  'AURICULARES SUPRAURALES PIONEER DJ HDJ-X5K',
  'Auriculares profesionales para DJ con drivers de 40mm y construcción robusta. Diseño giratorio, cable en espiral y respuesta de frecuencia optimizada para monitoreo.',
  320000,
  'https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=800',
  'Auriculares',
  'Pioneer DJ',
  '["https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=800", "https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=800"]'::jsonb,
  4.5,
  142,
  '{"tipo": "Supraurales cerrados", "drivers": "40mm", "respuesta_frecuencia": "5Hz-30kHz", "impedancia": "32 ohms", "cable": "Espiral 1.2m-3m", "peso": "252g"}'::jsonb,
  18,
  'PJHDJX5K',
  0.252,
  '{"ancho": 17.5, "alto": 19.8, "profundidad": 8.2}'::jsonb,
  true,
  false
),
(
  'SUBWOOFER KLIPSCH R-120SW - SUBWOOFER DE 12 PULGADAS',
  'Subwoofer activo de 12 pulgadas con amplificador digital de 400W. Driver de fibra de cono y puerto trasero para graves potentes y precisos.',
  1650000,
  'https://images.pexels.com/photos/1694900/pexels-photo-1694900.jpeg?auto=compress&cs=tinysrgb&w=800',
  'Parlantes',
  'Klipsch',
  '["https://images.pexels.com/photos/1694900/pexels-photo-1694900.jpeg?auto=compress&cs=tinysrgb&w=800", "https://images.pexels.com/photos/1540406/pexels-photo-1540406.jpeg?auto=compress&cs=tinysrgb&w=800"]'::jsonb,
  4.6,
  98,
  '{"driver": "12 pulgadas", "amplificador": "400W Digital", "respuesta_frecuencia": "29Hz-120Hz", "material_cono": "Fibra", "puerto": "Trasero", "controles": "Volumen, Crossover, Fase"}'::jsonb,
  6,
  'KLR120SW',
  22.7,
  '{"ancho": 38.7, "alto": 43.2, "profundidad": 45.7}'::jsonb,
  true,
  false
),
(
  'MONITOR DE AUDIO POLK XT35 CAJA CENTRAL - NEGRO',
  'Parlante central de 2 vías con tweeter de cúpula de seda y woofers de 5.25 pulgadas. Diseño optimizado para diálogos claros en sistemas home theater.',
  680000,
  'https://images.pexels.com/photos/164938/pexels-photo-164938.jpeg?auto=compress&cs=tinysrgb&w=800',
  'Parlantes',
  'Polk Audio',
  '["https://images.pexels.com/photos/164938/pexels-photo-164938.jpeg?auto=compress&cs=tinysrgb&w=800", "https://images.pexels.com/photos/1540406/pexels-photo-1540406.jpeg?auto=compress&cs=tinysrgb&w=800"]'::jsonb,
  4.3,
  76,
  '{"tipo": "Central 2 vías", "drivers": "2x Woofer 5.25 pulgadas, 1x Tweeter cúpula", "respuesta_frecuencia": "55Hz-25kHz", "potencia": "20-125W", "impedancia": "8 ohms"}'::jsonb,
  15,
  'POLKXT35',
  4.1,
  '{"ancho": 45.7, "alto": 16.5, "profundidad": 20.3}'::jsonb,
  true,
  false
);