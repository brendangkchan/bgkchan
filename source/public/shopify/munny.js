export default `
<div id='product-component-55fd0d45bcb'></div>
<script type="text/javascript">
/*<![CDATA[*/

(function () {
  var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
  if (window.ShopifyBuy) {
    if (window.ShopifyBuy.UI) {
      ShopifyBuyInit();
    } else {
      loadScript();
    }
  } else {
    loadScript();
  }

  function loadScript() {
    var script = document.createElement('script');
    script.async = true;
    script.src = scriptURL;
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
    script.onload = ShopifyBuyInit;
  }

  function ShopifyBuyInit() {
    var client = ShopifyBuy.buildClient({
      domain: 'bgkchan-art.myshopify.com',
      apiKey: '347eadb784162e307c7b112f5177520b',
      appId: '6',
    });

    ShopifyBuy.UI.onReady(client).then(function (ui) {
      ui.createComponent('product', {
        id: [7909678539],
        node: document.getElementById('product-component-55fd0d45bcb'),
        moneyFormat: '%24%7B%7Bamount%7D%7D',
        options: {
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
        "background-color": "#0099cc",
        "font-family": "Source Sans Pro, sans-serif",
        ":hover": {
          "background-color": "#008ab8"
        },
        ":focus": {
          "background-color": "#008ab8"
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
        "background-color": "#0099cc",
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
        "font-family": "Source Sans Pro, sans-serif",
        "background-color": "#0099cc",
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
      });
    });
  }
})();
/*]]>*/
</script>`