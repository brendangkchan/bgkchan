let client

export function initShopify () {
  if (typeof window === 'undefined') {
    return
  }
  if (window.ShopifyBuy) {
    if (window.ShopifyBuy.UI) {
      ShopifyBuyInit();
    } else {
      loadScript();
    }
  } else {
    loadScript();
  }
}

export function loadProduct (productId) {
  console.log('loadProduct', typeof window.ShopifyBuy)
  if (typeof window === 'undefined' ||
      typeof window.ShopifyBuy === 'undefined' ||
      typeof window.ShopifyBuy.UI === 'undefined') {
    console.log('not init')
    setTimeout(loadProduct, 100)
    return
  }

  console.log('inited')

  window.ShopifyBuy.UI.onReady(client).then(function (ui) {
    console.log('ready', ui)
    ui.createComponent('product', {
      id: [productId],
      node: document.getElementById(`product-component-productId`),
      moneyFormat: '%24%7B%7Bamount%7D%7D',
      options: options
    });
  });
}

const scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';

function loadScript() {
  console.log('loadScript');
  var script = document.createElement('script');
  script.async = true;
  script.src = scriptURL;
  (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
  script.onload = ShopifyBuyInit;
}

function ShopifyBuyInit() {
  console.log('ShopifyBuyInit')
  client = ShopifyBuy.buildClient({
    domain: 'bgkchan-art.myshopify.com',
    apiKey: '347eadb784162e307c7b112f5177520b',
    appId: '6',
  });

  ShopifyBuy.UI.onReady(client).then(function (ui) {
    ui.createComponent('product', {
      id: [7909678539],
      node: document.getElementById('product-component-55fd0d45bcb'),
      moneyFormat: '%24%7B%7Bamount%7D%7D',
      options: options
    });
  });
}

const options = {
  "product": {
    "variantId": "all",
    "width": "240px",
    "contents": {
      "img": false,
      "title": false,
      "variantTitle": false,
      "price": false,
      "description": false,
      "buttonWithQuantity": true,
      "button": false,
      "quantity": false
    },
    "styles": {
      "product": {
        "text-align": "left",
        "@media (min-width: 601px)": {
          "max-width": "100%",
          "margin-left": "0",
          "margin-bottom": "50px"
        }
      },
      "button": {
        "background-color": "#0099CC",
        "font-family": "Source Sans Pro, sans-serif",
        ":hover": {
          "background-color": "#33b5e5"
        },
        ":focus": {
          "background-color": "#33b5e5"
        },
        "font-weight": "bold"
      },
      "title": {
        "font-size": "26px"
      },
      "price": {
        "font-size": "18px"
      },
      "compareAt": {
        "font-size": "15px"
      }
    },
    "googleFonts": [
      "Source Sans Pro"
    ]
  },
  "cart": {
    "contents": {
      "button": true
    },
    "styles": {
      "button": {
        "background-color": "#FFF",
        "color": "222",
        "font-family": "Source Sans Pro, sans-serif",
        ":hover": {
          "background-color": "#008ab8"
        },
        ":focus": {
          "background-color": "#008ab8"
        },
        "font-weight": "bold"
      },
      "footer": {
        "background-color": "#ffffff"
      }
    },
    "googleFonts": [
      "Source Sans Pro"
    ]
  },
  "modalProduct": {
    "contents": {
      "variantTitle": false,
      "buttonWithQuantity": true,
      "button": false,
      "quantity": false
    },
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "100%",
          "margin-left": "0px",
          "margin-bottom": "0px"
        }
      },
      "button": {
        "background-color": "#0099cc",
        "font-family": "Source Sans Pro, sans-serif",
        ":hover": {
          "background-color": "#008ab8"
        },
        ":focus": {
          "background-color": "#008ab8"
        },
        "font-weight": "bold"
      }
    },
    "googleFonts": [
      "Source Sans Pro"
    ]
  },
  "toggle": {
    "styles": {
      "toggle": {
        "top": "0",
        "font-family": "Source Sans Pro, sans-serif",
        "color": "FFF",
        "background-color": "#222",
        ":hover": {
          "background-color": "#333"
        },
        ":focus": {
          "background-color": "#333"
        },
        "font-weight": "bold"
      }
    },
    "googleFonts": [
      "Source Sans Pro"
    ]
  },
  "productSet": {
    "styles": {
      "products": {
        "@media (min-width: 601px)": {
          "margin-left": "-20px"
        }
      }
    }
  }
}