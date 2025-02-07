const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(bodyParser.json());
app.use(cors());

// Mock data: Productos y carrito
let products = [
  {
    id: 1,
    name: "Logitech G Pro X Superlight",
    price: 3000,
    variants: [
      { color: "blanco", stock: 10 },
      { color: "negro", stock: 10 },
      {color: "fuchsia", stock: 5 }
    ],
    image:
      "https://resource.logitechg.com/w_692,c_lpad,ar_4:3,q_auto,f_auto,dpr_1.0/d_transparent.gif/content/dam/gaming/en/products/pro-x-superlight/pro-x-superlight-black-gallery-6.png?v=1",
    description: "Mouse sensor HERO inalambrico superlight",
    category: "mouse",
    images: [
      {
        url: "https://resource.logitechg.com/w_692,c_lpad,ar_4:3,q_auto,f_auto,dpr_1.0/d_transparent.gif/content/dam/gaming/en/products/pro-x-superlight/pro-x-superlight-black-gallery-6.png?v=1",
      },
      {
        url: "https://www.logitechstore.com.br/media/catalog/product/cache/105e6f420716e0751863c4b81f527d17/g/p/gprox2glogitech.png",
      },
      {
        url: "https://resource.logitechg.com/w_692,c_lpad,ar_4:3,q_auto,f_auto,dpr_1.0/d_transparent.gif/content/dam/gaming/en/products/pro-x-superlight/magenta-update/bazooka-magenta-gallery-6.png?v=1"
      }
    ],
  },
  {
    id: 2,
    name: "ZONE VIBE 100",
    price: 1839,
    variants: [
      { color: "blanco", stock: 5 },
      { color: "negro", stock: 7 },
      { color: "rosa", stock: 3 },
    ],
    image:
      "https://resource.logitech.com/content/dam/logitech/en/products/headsets/zone-vibe-100/gallery/zone-vibe-100-gallery-graphite-1.png",
    description:
      "Auriculares inalámbricos ligeros: lo suficientemente profesionales para la oficina y perfectos para trabajar desde casa",
    category: "headphones",
    images: [
      {
        url: "https://resource.logitech.com/content/dam/logitech/en/products/headsets/zone-vibe-100/gallery/zone-vibe-100-gallery-graphite-1.png",
      },
      {
        url: "https://resource.logitech.com/content/dam/logitech/en/products/headsets/zone-vibe-100/gallery/zone-vibe-100-gallery-white-1.png",
      },
      {
        url: "https://resource.logitech.com/w_800,c_lpad,ar_4:3,q_auto,f_auto,dpr_1.0/d_transparent.gif/content/dam/logitech/en/products/headsets/zone-vibe-100/gallery/zone-vibe-100-gallery-rose-1.png?v=1",
      },
    ],
  },
  {
    id: 3,
    name: "Mx brio",
    price: 3679,
    variants: [{ color: "plateado", stock: 20 }],
    image:
      "https://resource.logitech.com/content/dam/logitech/en/products/webcams/mx-brio/buy/gallery/mx-brio-3qtr-front-right-graphite-gallery.png",
    description: "Cámara web Ultra HD 4K para colaboración y streaming",
    category: "webcams",
    images: [
      {
        url: "https://resource.logitech.com/content/dam/logitech/en/products/webcams/mx-brio/buy/gallery/mx-brio-3qtr-front-right-graphite-gallery.png",
      },
    ],
  },
  {
    id: 4,
    name: "Keyboard Logitech G Pro X",
    price: 2679,
    variants: [
      { color: "blanco", stock: 15 },
      { color: "negro", stock: 10 },
      { color: "fuchsia", stock: 5 },
    ],
    image:
      "https://http2.mlstatic.com/D_NQ_NP_944800-MLA74782534407_022024-O.webp",
    description: "Mouse mecanico inalámbrico switches RGB",
    category: "keyboards",
    images: [
      {
        url: "https://resource.logitechg.com/w_692,c_lpad,ar_4:3,q_auto,f_auto,dpr_1.0/d_transparent.gif/content/dam/gaming/en/products/pro-keyboard/pro-keyboard-gallery/us-pro-gaming-keyboard-gallery-topdown.png?v=1",
      },
      {
        url: "https://resource.logitech.com/content/dam/gaming/en/products/pro-x-tkl/gallery-2-pro-x-tkl-white-lightspeed-gaming-keyboard.png",
      },
      {
        url: "https://resource.logitechg.com/d_transparent.gif/content/dam/gaming/en/products/pro-x-tkl-rapid/gallery/pro-x-tkl-rapid-magenta-gallery-1-us.png",
      },
    ],
  },
  {
    id: 5,
    name: "Logitech G203 Lightsync",
    price: 500,
    variants: [
      { color: "blanco", stock: 8 },
      { color: "negro", stock: 7 },
    ],
    image:
      "https://resource.logitech.com/content/dam/gaming/en/products/refreshed-g203/g203-black-gallery-2.png",
    description: "Mouse Sensor RGB",
    category: "mouse",
    images: [
      {
        url: "https://resource.logitech.com/content/dam/gaming/en/products/refreshed-g203/g203-black-gallery-2.png",
      },
      {
        url: "https://resource.logitech.com/content/dam/gaming/en/products/refreshed-g203/g203-white-gallery-1.png",
      },
    ],
  },
  {
    id: 6,
    name: "Logi dock",
    price: 7999,
    variants: [
      { color: "negro", stock: 6 },
      { color: "blanco", stock: 6 },
    ],
    image:
      "https://resource.logitech.com/content/dam/logitech/en/products/video-conferencing/logi-dock/logi-dock-uc-white-1.png",
    description:
      "Estación base todo-en-uno con altavoces y controles para entrar en las reuniones con un toque",
    category: "speakers",
    images: [
      {
        url: "https://resource.logitech.com/content/dam/logitech/en/products/video-conferencing/logi-dock/logi-dock-uc-white-1.png",
      },
      {
        url: "https://resource.logitech.com/content/dam/logitech/en/products/video-conferencing/logi-dock/logi-dock-uc-graphite-1.png",
      },
    ],
  },
  {
    id: 7,
    name: "Logitech Astro A50",
    price: 4560,
    variants: [
      { color: "negro", stock: 4 },
      { color: "blanco", stock: 4 },
    ],
    image:
      "https://resource.logitech.com/content/dam/astro/en/products/a50-headset-with-base-station-gen4/a50-gallery-ps4-01-refresh.png",
    description: "Auriculares gaming inalambricos Astro",
    category: "headphones",
    images: [
      {
        url: "https://resource.logitech.com/content/dam/astro/en/products/a50-headset-with-base-station-gen4/a50-gallery-ps4-01-refresh.png",
      },
      {
        url: "https://resource.logitech.com/content/dam/gaming/en/products/astro-a50-x/product-gallery/astro-a50-x-white-gallery-1.png",
      },
    ],
  },
  {
    id: 8,
    name: "Pro X TKL RAPID",
    price: 3499,
    variants: [
      { color: "negro", stock: 2 },
      { color: "blanco", stock: 2 },
      { color: "fuchsia", stock: 1 },
    ],
    image:
      "https://resource.logitechg.com/w_692,c_lpad,ar_4:3,q_auto,f_auto,dpr_1.0/d_transparent.gif/content/dam/gaming/en/products/pro-x-tkl-rapid/gallery/pro-x-tkl-rapid-black-gallery-1-us.png?v=1",
    description: "Teclado TKL switches mecanicos RGB",
    category: "keyboards",
    images: [
      {
        url: "https://resource.logitechg.com/w_692,c_lpad,ar_4:3,q_auto,f_auto,dpr_1.0/d_transparent.gif/content/dam/gaming/en/products/pro-x-tkl-rapid/gallery/pro-x-tkl-rapid-black-gallery-1-us.png?v=1",
      },
      {
        url: "https://resource.logitech.com/content/dam/gaming/en/products/pro-x-tkl-rapid/gallery/pro-x-tkl-rapid-white-gallery-1-pan.png",
      },
      {
        url: "https://resource.logitech.com/content/dam/gaming/en/products/pro-x-tkl-rapid/gallery/pro-x-tkl-rapid-magenta-gallery-1-deu.png",
      },
    ],
  },
  {
    id: 9,
    name: "Z607 5.1 Surround sound speaker",
    price: 3799,
    variants: [{ color: "negro", stock: 25 }],
    image:
      "https://resource.logitech.com/content/dam/logitech/en/products/speakers/z607/gallery/z607-gallery-1.png",
    description: "Sonido potente con Bluetooth",
    category: "speakers",
    images: [
      {
        url: "https://resource.logitech.com/content/dam/logitech/en/products/speakers/z607/gallery/z607-gallery-1.png",
      },
    ],
  },
  {
    id: 10,
    name: "Logitech C920 HD Pro",
    price: 1127,
    variants: [{ color: "negro", stock: 18 }],
    image:
      "https://resource.logitech.com/w_800,c_lpad,ar_4:3,q_auto,f_auto,dpr_1.0/d_transparent.gif/content/dam/logitech/en/products/webcams/c920s/gallery/c920s-gallery-1.png?v=1",
    description: "Cámara web para streaming. 1080p superrápido a 30 fps",
    category: "webcams",
    images: [
      {
        url: "https://resource.logitech.com/w_800,c_lpad,ar_4:3,q_auto,f_auto,dpr_1.0/d_transparent.gif/content/dam/logitech/en/products/webcams/c920s/gallery/c920s-gallery-1.png?v=1",
      },
    ],
  },
  {
    id: 11,
    name: "Logitech Pro x wireless",
    price: 3269,
    variants: [
      { color: "negro", stock: 4 },
      { color: "blanco", stock: 4 },
    ],
    image:
      "https://resource.logitechg.com/w_692,c_lpad,ar_4:3,q_auto,f_auto,dpr_1.0/d_transparent.gif/content/dam/gaming/en/products/pro-x-2-lightspeed/gallery/gallery-1-pro-x-2-lightspeed-gaming-headset-black.png?v=1",
    description: "Auriculares lightspeed inalambricos",
    category: "headphones",
    images: [
      {
        url: "https://resource.logitechg.com/w_692,c_lpad,ar_4:3,q_auto,f_auto,dpr_1.0/d_transparent.gif/content/dam/gaming/en/products/pro-x-2-lightspeed/gallery/gallery-1-pro-x-2-lightspeed-gaming-headset-black.png?v=1",
      },
      {
        url: "https://resource.logitech.com/content/dam/gaming/en/products/pro-x-2-lightspeed/gallery/gallery-1-pro-x-2-lightspeed-gaming-headset-white.png",
      },
    ],
  },
  {
    id: 12,
    name: "Signature K650",
    price: 1103,
    variants: [
      { color: "negro", stock: 6 },
      { color: "blanco", stock: 4 },
    ],
    image:
      "https://resource.logitech.com/content/dam/logitech/en/products/keyboards/k650-signature-wireless-keyboard/gallery/k650-top-graphite-esp.png",
    description:
      "Teclado inalámbrico, equipado para el trabajo diario y el confort",
    category: "keyboards",
    images: [
      {
        url: "https://resource.logitech.com/content/dam/logitech/en/products/keyboards/k650-signature-wireless-keyboard/gallery/k650-top-graphite-esp.png",
      },
      {
        url: "https://resource.logitech.com/content/dam/logitech/en/products/keyboards/k650-signature-wireless-keyboard/gallery/k650-top-off-white-esp.png",
      },
    ],
  },
  {
    id: 13,
    name: "M720 Triathlon",
    price: 1279,
    variants: [{ color: "negro", stock: 8 }],
    image:
      "https://resource.logitech.com/content/dam/logitech/en/products/mice/m720/gallery/m720-gallery-1a.png",
    description:
      "Mouse inalábrico multidispositivo con desplazamiento ultra rápido",
    category: "mouse",
    images: [
      {
        url: "https://resource.logitech.com/content/dam/logitech/en/products/mice/m720/gallery/m720-gallery-1a.png",
      },
    ],
  },
  {
    id: 14,
    name: "STREAMCAM",
    price: 3439,
    variants: [
      { color: "negro", stock: 4 },
      { color: "blanco", stock: 4 },
    ],
    image:
      "https://resource.logitech.com/content/dam/logitech/en/products/webcams/streamcam/gallery/streamcam-gallery-1-graphite.png",
    description:
      "Cámara con Full HD y USB-C para streaming de video en tiempo real y creación de contenido",
    category: "webcams",
    images: [
      {
        url: "https://resource.logitech.com/content/dam/logitech/en/products/webcams/streamcam/gallery/streamcam-gallery-1-graphite.png",
      },
      {
        url: "https://resource.logitech.com/content/dam/logitech/en/products/webcams/streamcam/gallery/streamcam-gallery-1-white.png",
      },
    ],
  },
  {
    id: 15,
    name: "Z207",
    price: 1759,
    variants: [
      { color: "negro", stock: 4 },
      { color: "blanco", stock: 4 },
    ],
    image:
      "https://resource.logitech.com/content/dam/logitech/en/products/speakers/z207/gallery/z207-black-gallery-1.png",
    description: "Bocinas Bluetooth para Computadora",
    category: "speakers",
    images: [
      {
        url: "https://resource.logitech.com/content/dam/logitech/en/products/speakers/z207/gallery/z207-black-gallery-1.png",
      },
      {
        url: "https://resource.logitech.com/w_800,c_lpad,ar_16:9,q_auto,f_auto,dpr_1.0/d_transparent.gif/content/dam/logitech/en/products/speakers/z207/gallery/z207-white-gallery-1.png?v=1",
      },
    ],
  },
  {
    id: 16,
    name: "Logitech G515",
    price: 3659,
    variants: [
      { color: "negro", stock: 4 },
      { color: "blanco", stock: 4 },
    ],
    image:
      "https://resource.logitech.com/content/dam/gaming/en/products/g515-lightspeed-tkl/gallery/g515-keyboard-black-gallery-1-us.png",
    description:
      "Interruptores híbridos LIGHTFORCE, inalámbricos de calidad profesional, RGB",
    category: "keyboards",
    images: [
      {
        url: "https://resource.logitech.com/content/dam/gaming/en/products/g515-lightspeed-tkl/gallery/g515-keyboard-black-gallery-1-us.png",
      },
      {
        url: "https://resource.logitech.com/content/dam/gaming/en/products/g515-lightspeed-tkl/gallery/g515-keyboard-white-gallery-1-us.png",
      },
    ],
  },
  {
    id: 17,
    name: "G502 X Plus",
    price: 1549,
    variants: [
      { color: "negro", stock: 4 },
      { color: "blanco", stock: 4 },
    ],
    image:
      "https://resource.logitech.com/content/dam/gaming/en/products/g502x-plus/gallery/g502x-plus-gallery-1-black.png",
    description:
      "interruptores híbridos LIGHTFORCE, tecnología inalámbrica LIGHTSPEED de nivel profesional, RGB LIGHTSYNC",
    category: "mouse",
    images: [
      {
        url: "https://resource.logitech.com/content/dam/gaming/en/products/g502x-plus/gallery/g502x-plus-gallery-1-black.png",
      },
      {
        url: "https://resource.logitech.com/content/dam/gaming/en/products/g502x-corded/gallery/g502x-corded-gallery-1-white.png",
      },
    ],
  },
  {
    id: 18,
    name: "POWERPLAY",
    price: 1239,
    variants: [{ color: "negro", stock: 4 }],
    image:
      "https://resource.logitechg.com/w_692,c_lpad,ar_4:3,q_auto,f_auto,dpr_1.0/d_transparent.gif/content/dam/gaming/en/non-braid/crush-powerplay/powerplay-gallery-2-nb.png?v=1",
    description: "Sistema inalambrico de carga",
    category: "mousepad",
    images: [
      {
        url: "https://resource.logitechg.com/w_692,c_lpad,ar_4:3,q_auto,f_auto,dpr_1.0/d_transparent.gif/content/dam/gaming/en/non-braid/crush-powerplay/powerplay-gallery-2-nb.png?v=1",
      },
    ],
  },
  {
    id: 19,
    name: "Brio 300",
    price: 1471,
    variants: [
      { color: "negro", stock: 4 },
      { color: "blanco", stock: 4 },
      { color: "rosa", stock: 4 },
    ],
    image:
      "https://resource.logitech.com/w_692,c_lpad,ar_4:3,q_auto,f_auto,dpr_1.0/d_transparent.gif/content/dam/logitech/en/products/webcams/brio-300/gallery/brio-300-gallery-offwhite-2.png?v=1",
    description:
      "Una cámara web de 1080p con corrección de iluminación automática, micrófono con reducción de ruido y conectividad USB-C",
    category: "webcams",
    images: [
      {
        url: "https://resource.logitech.com/w_692,c_lpad,ar_4:3,q_auto,f_auto,dpr_1.0/d_transparent.gif/content/dam/logitech/en/products/webcams/brio-300/gallery/brio-300-gallery-offwhite-2.png?v=1",
      },
      {
        url: "https://resource.logitech.com/w_800,c_lpad,ar_16:9,q_auto,f_auto,dpr_1.0/d_transparent.gif/content/dam/logitech/en/products/webcams/brio-300/gallery/brio-300-gallery-graphite-1.png?v=1",
      },
      {
        url: "https://resource.logitech.com/w_800,c_lpad,ar_16:9,q_auto,f_auto,dpr_1.0/d_transparent.gif/content/dam/logitech/en/products/webcams/brio-300/gallery/brio-300-gallery-rose-1.png?v=1",
      },
    ],
  },
  {
    id: 20,
    name: "Ergo M575",
    price: 70,
    variants: [
      { color: "negro", stock: 4 },
      { color: "blanco", stock: 4 },
    ],
    image:
      "https://resource.logitech.com/content/dam/logitech/en/products/mice/ergo-m575/gallery/ergo-m575-gallery-black-1-new.png",
    description:
      "Trackball inalámbrico accionado con el pulgar, para confort prolongado",
    category: "mouse",
    images: [
      {
        url: "https://resource.logitech.com/content/dam/logitech/en/products/mice/ergo-m575/gallery/ergo-m575-gallery-black-1-new.png",
      },
      {
        url: "https://resource.logitech.com/w_800,c_lpad,ar_1:1,q_auto,f_auto,dpr_1.0/d_transparent.gif/content/dam/logitech/en/products/mice/ergo-m575/gallery/ergo-m575-gallery-off-white-1-new.png?v=1",
      },
    ],
  },
];

let cart = [];

// Rutas de productos
app.get("/products", (req, res) => {
  res.json(products);
});

// Ruta para obtener un producto por ID
app.get("/products/:id", (req, res) => {
  const { id } = req.params;
  const { color } = req.query;

  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return res.status(404).json({ message: "Producto no encontrado" });
  }

  if (color) {
    const variant = product.variants.find((v) => v.color === color);
    if (!variant) {
      return res.status(404).json({ message: `Color '${color}' no encontrado en este producto` });
    }

    return res.json({
      ...product,
      quantity: variant.stock, // Agrega la cantidad del color solicitado
    });
  }

  res.json(product);
});


// Rutas del carrito
app.get("/cart", (req, res) => {
  res.json(cart);
});

// POST: Agregar producto al carrito
app.post("/cart", (req, res) => {
  const { productId, color, quantity } = req.body;

  const product = products.find((p) => p.id === productId);
  if (!product) {
    return res.status(404).json({ error: "Producto no encontrado" });
  }

  const variant = product.variants.find((v) => v.color === color);
  if (!variant) {
    return res.status(404).json({ error: "Color no disponible" });
  }

  if (variant.stock < quantity) {
    return res.status(400).json({ error: "Stock insuficiente" });
  }

  // Verificar si el producto con ese color ya está en el carrito
  const cartItem = cart.find(
    (item) => item.productId === productId && item.color === color
  );

  if (cartItem) {
    // Actualizar cantidad en el carrito
    if (cartItem.quantity + quantity > variant.stock) {
      return res
        .status(400)
        .json({ error: "Stock insuficiente para actualizar" });
    }
    cartItem.quantity += quantity;
  } else {
    // Agregar nuevo producto al carrito
    cart.push({
      productId,
      name: product.name,
      image: product.image,
      color,
      quantity,
      price: product.price,
    });
  }

  // Reducir el stock del producto
  variant.stock -= quantity;

  res.status(201).json(cart);
});

// PUT: Actualizar cantidad de un producto en el carrito
app.put("/cart/:productId", (req, res) => {
  const productId = parseInt(req.params.productId); // ID del producto desde la URL
  const { color, quantity } = req.body; // Color y cantidad desde el cuerpo de la solicitud

  // Buscar el producto en el carrito por `productId` y `color`
  const cartItem = cart.find(
    (item) => item.productId === productId && item.color === color
  );

  if (!cartItem) {
    return res
      .status(404)
      .json({ error: "Producto no encontrado en el carrito" });
  }

  const product = products.find((p) => p.id === productId);
  if (!product) {
    return res.status(404).json({ error: "Producto no encontrado" });
  }

  // Buscar la variante específica del producto basada en el color
  const variant = product.variants.find((v) => v.color === color);
  if (!variant) {
    return res
      .status(404)
      .json({ error: "Variante de producto no encontrada" });
  }

  // Calcular la diferencia en la cantidad
  const quantityDifference = quantity - cartItem.quantity;

  // Verificar si hay suficiente stock para la actualización
  if (variant.stock < quantityDifference) {
    return res.status(400).json({ error: "Cantidad insuficiente en stock" });
  }

  // Actualizar la cantidad en el carrito y ajustar el stock del producto
  cartItem.quantity = quantity;
  variant.stock -= quantityDifference;

  // Devolver el carrito actualizado
  res.json(cart);
});

// Ruta para eliminar un producto del carrito
app.delete("/cart/:id", (req, res) => {
  const productId = parseInt(req.params.id);
  const { color } = req.body;

  if (!color) {
    return res
      .status(400)
      .json({ error: "Se debe especificar el color del producto" });
  }

  // Buscar el producto en el carrito
  const cartItemIndex = cart.findIndex(
    (item) => item.productId === productId && item.color === color
  );

  if (cartItemIndex === -1) {
    return res
      .status(404)
      .json({ error: "Producto no encontrado en el carrito" });
  }

  // Eliminar el producto del carrito
  cart.splice(cartItemIndex, 1);

  res.json({ message: "Producto eliminado del carrito" });
});

// Servidor
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
