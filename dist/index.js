(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
  var __require = /* @__PURE__ */ ((x) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x, {
    get: (a, b) => (typeof require !== "undefined" ? require : a)[b]
  }) : x)(function(x) {
    if (typeof require !== "undefined")
      return require.apply(this, arguments);
    throw new Error('Dynamic require of "' + x + '" is not supported');
  });
  var __reExport = (target, module, desc) => {
    if (module && typeof module === "object" || typeof module === "function") {
      for (let key of __getOwnPropNames(module))
        if (!__hasOwnProp.call(target, key) && key !== "default")
          __defProp(target, key, { get: () => module[key], enumerable: !(desc = __getOwnPropDesc(module, key)) || desc.enumerable });
    }
    return target;
  };
  var __toModule = (module) => {
    return __reExport(__markAsModule(__defProp(module != null ? __create(__getProtoOf(module)) : {}, "default", module && module.__esModule && "default" in module ? { get: () => module.default, enumerable: true } : { value: module, enumerable: true })), module);
  };
  var __decorateClass = (decorators, target, key, kind) => {
    var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
    for (var i = decorators.length - 1, decorator; i >= 0; i--)
      if (decorator = decorators[i])
        result = (kind ? decorator(target, key, result) : decorator(result)) || result;
    if (kind && result)
      __defProp(target, key, result);
    return result;
  };

  // modules/index.tsx
  var import_components4 = __toModule(__require("@ijstech/components"));

  // modules/config.tsx
  var import_components2 = __toModule(__require("@ijstech/components"));

  // modules/config.css.ts
  var import_components = __toModule(__require("@ijstech/components"));
  var textareaStyle = import_components.Styles.style({
    $nest: {
      "textarea": {
        border: "none",
        outline: "none"
      }
    }
  });

  // modules/utils.ts
  var import_eth_wallet = __toModule(__require("@ijstech/eth-wallet"));
  var _cardTyps = ["horizontal-list", "vertical-list", "carousel"];
  var getCardTypeOption = () => {
    return _cardTyps.map((type) => {
      const label = type.replace(/(-|^)([^-]?)/g, function(_, prep, letter) {
        return (prep && " ") + letter.toUpperCase();
      });
      return {
        label,
        value: type
      };
    });
  };
  var formatNumber = (value, decimals) => {
    let val = value;
    const minValue = "0.0000001";
    if (typeof value === "string") {
      val = new import_eth_wallet.BigNumber(value).toNumber();
    } else if (typeof value === "object") {
      val = value.toNumber();
    }
    if (val != 0 && new import_eth_wallet.BigNumber(val).lt(minValue)) {
      return `<${minValue}`;
    }
    return formatNumberWithSeparators(val, decimals || 4);
  };
  var formatNumberWithSeparators = (value, precision) => {
    if (!value)
      value = 0;
    if (precision) {
      let outputStr = "";
      if (value >= 1) {
        outputStr = value.toLocaleString("en-US", { maximumFractionDigits: precision });
      } else {
        outputStr = value.toLocaleString("en-US", { maximumSignificantDigits: precision });
      }
      if (outputStr.length > 18) {
        outputStr = outputStr.substr(0, 18) + "...";
      }
      return outputStr;
    } else {
      return value.toLocaleString("en-US");
    }
  };

  // modules/config.tsx
  var Config = class extends import_components2.Module {
    get data() {
      const selectedItem = this.cbCardType.selectedItem;
      const _data = {
        title: this.edtTitle.value || "",
        description: this.edtDesc.value || "",
        contractEntrypoint: this.edtContract.value || "",
        viewAllUrl: this.edtViewAllUrl.value || ""
      };
      if (selectedItem)
        _data.type = selectedItem.value;
      const itemsToShow = Number(this.edtItemsToShow.value);
      if (Number.isInteger(itemsToShow))
        _data.itemsToShow = itemsToShow;
      return _data;
    }
    set data(config) {
      this.edtTitle.value = config.title || "";
      this.edtDesc.value = config.description || "";
      this.edtContract.value = config.contractEntrypoint || "";
      this.cbCardType.clear();
      const type = this._items.find((type2) => type2.value === config.type);
      if (type)
        this.cbCardType.selectedItem = type;
      this.edtItemsToShow.value = config.itemsToShow || "";
      this.edtViewAllUrl.value = config.viewAllUrl || "";
    }
    init() {
      this._items = getCardTypeOption();
      super.init();
    }
    render() {
      return /* @__PURE__ */ this.$render("i-vstack", {
        id: "pnlConfig",
        gap: "0.5rem",
        padding: { top: "1rem", bottom: "1rem", left: "1rem", right: "1rem" }
      }, /* @__PURE__ */ this.$render("i-label", {
        caption: "Title:"
      }), /* @__PURE__ */ this.$render("i-input", {
        id: "edtTitle",
        width: "100%"
      }), /* @__PURE__ */ this.$render("i-label", {
        caption: "Description:"
      }), /* @__PURE__ */ this.$render("i-input", {
        id: "edtDesc",
        class: textareaStyle,
        width: "100%",
        height: "auto",
        resize: "auto-grow",
        inputType: "textarea"
      }), /* @__PURE__ */ this.$render("i-label", {
        caption: "Card Type:"
      }), /* @__PURE__ */ this.$render("i-combo-box", {
        id: "cbCardType",
        width: "100%",
        icon: { name: "angle-down" },
        items: this._items
      }), /* @__PURE__ */ this.$render("i-label", {
        caption: "Max items to show:"
      }), /* @__PURE__ */ this.$render("i-input", {
        id: "edtItemsToShow",
        width: "100%",
        inputType: "number"
      }), /* @__PURE__ */ this.$render("i-label", {
        caption: "Contract Entrypoint:"
      }), /* @__PURE__ */ this.$render("i-input", {
        id: "edtContract",
        width: "100%"
      }), /* @__PURE__ */ this.$render("i-label", {
        caption: "View all link:"
      }), /* @__PURE__ */ this.$render("i-input", {
        id: "edtViewAllUrl",
        width: "100%"
      }));
    }
  };
  Config = __decorateClass([
    import_components2.customModule,
    (0, import_components2.customElements)("pageblock-card-config")
  ], Config);

  // modules/index.css.ts
  var import_components3 = __toModule(__require("@ijstech/components"));
  var Theme = import_components3.Styles.Theme.ThemeVars;
  var cardStyle = import_components3.Styles.style({
    boxShadow: "rgb(0 0 0 / 8%) 0px 4px 12px",
    $nest: {
      "i-link > a": {
        textDecoration: "none"
      }
    }
  });
  var cardItemStyle = import_components3.Styles.style({
    cursor: "pointer",
    $nest: {
      "&:hover i-button": {
        background: Theme.colors.primary.dark,
        color: Theme.colors.primary.contrastText
      },
      "&:hover i-button > i-icon": {
        fill: "#fff !important"
      }
    }
  });
  var imageStyle = import_components3.Styles.style({
    $nest: {
      "> img": {
        width: "100%",
        borderRadius: 5
      }
    }
  });
  var actionButtonStyle = import_components3.Styles.style({
    boxShadow: "none",
    $nest: {
      "&:hover": {
        background: Theme.colors.primary.dark,
        color: Theme.colors.primary.contrastText
      },
      "> i-icon:hover": {
        fill: "#fff !important"
      }
    }
  });
  var carouselStyle = import_components3.Styles.style({
    $nest: {
      ".dots-pagination": {
        height: 45,
        background: Theme.background.paper,
        borderTop: "1px solid rgba(217,225,232,.38)",
        marginTop: 0
      },
      ".dots-pagination .--dot > span": {
        minHeight: "0.6rem",
        minWidth: "0.6rem"
      }
    }
  });
  var controlStyle = import_components3.Styles.style({
    $nest: {
      "i-button": {
        boxShadow: "none"
      },
      "i-button > span": {
        display: "none"
      },
      "i-button:not(.disabled):hover": {
        background: "transparent",
        boxShadow: "none",
        borderColor: "rgba(117,124,131,.68)",
        $nest: {
          "> i-icon": {
            fill: "rgba(117,124,131,.68) !important"
          }
        }
      }
    }
  });

  // modules/data.json.ts
  var productList = [
    {
      name: "Gift Card A",
      price: 99,
      token: "USDT",
      quantity: 1e3,
      img: "https://images.unsplash.com/photo-1612404730960-5c71577fca11?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFyaW98ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
    },
    {
      name: "Gift Card B",
      price: 188,
      token: "USDT",
      quantity: 1e3,
      img: "https://images.unsplash.com/photo-1612404730960-5c71577fca11?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFyaW98ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
    },
    {
      name: "Gift Card C",
      price: 349,
      token: "USDT",
      quantity: 1e3,
      img: "https://images.unsplash.com/photo-1612404730960-5c71577fca11?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFyaW98ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
    },
    {
      name: "Gift Card D",
      price: 500,
      token: "USDT",
      quantity: 1e3,
      img: "https://images.unsplash.com/photo-1612404730960-5c71577fca11?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFyaW98ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
    },
    {
      name: "Game Pass A",
      price: 198,
      token: "USDT",
      quantity: 1e3,
      img: "https://images.unsplash.com/photo-1634309490604-1270c0d486e8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Zm9ydG5pdGV8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60"
    },
    {
      name: "Game Pass B",
      price: 198,
      token: "USDT",
      quantity: 1e3,
      img: "https://images.unsplash.com/photo-1634309490604-1270c0d486e8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Zm9ydG5pdGV8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60"
    }
  ];
  var data_json_default = productList;

  // modules/index.tsx
  var Theme2 = import_components4.Styles.Theme.ThemeVars;
  var Module1 = class extends import_components4.Module {
    constructor() {
      super(...arguments);
      this._data = {};
      this.defaultEdit = true;
    }
    getData() {
      return this._data;
    }
    async setData(data) {
      this._data = data;
      this.cardConfig.data = data;
      this.onUpdateBlock();
    }
    getTag() {
      return this.tag;
    }
    async setTag(value) {
      this.tag = value;
    }
    async edit() {
      this.cardConfig.data = this._data;
      this.pnlCard.visible = false;
      this.cardConfig.visible = true;
    }
    async confirm() {
      this._data = this.cardConfig.data;
      this.onUpdateBlock();
      this.pnlCard.visible = true;
      this.cardConfig.visible = false;
    }
    async discard() {
      this.pnlCard.visible = true;
      this.cardConfig.visible = false;
    }
    async config() {
    }
    onUpdateBlock() {
      this.lblTitle.caption = this._data.title || "";
      this.lblDesc.caption = this._data.description || "";
      this.renderProductItems();
    }
    renderProductItems() {
      const products = this._data.itemsToShow ? data_json_default.slice(0, this._data.itemsToShow) : data_json_default;
      const type = this._data.type || "horizontal-list";
      this.pnlControls.clearInnerHTML();
      switch (type) {
        case "horizontal-list":
          this.renderHorizontalList(products);
          this.renderViewAll();
          break;
        case "vertical-list":
          this.renderVerticalList(products);
          this.renderViewAll();
          break;
        case "carousel":
          this.renderCarousel(products);
          break;
      }
    }
    renderHorizontalList(products) {
      this.pnlCardBody.clearInnerHTML();
      const lytItems = /* @__PURE__ */ this.$render("i-card-layout", {
        width: "100%",
        padding: { bottom: "1rem", left: "1rem", right: "1rem" },
        gap: { column: "1rem", row: "0.75rem" },
        columnsPerRow: 4,
        cardMinWidth: "250px"
      });
      this.pnlCardBody.appendChild(lytItems);
      products.forEach((product) => {
        lytItems.append(/* @__PURE__ */ this.$render("i-grid-layout", {
          width: "100%",
          height: "100%",
          class: cardItemStyle,
          border: { width: 1, style: "solid", color: "rgba(217,225,232,.38)", radius: 5 },
          gap: { column: "1rem", row: "1rem" },
          templateAreas: [
            ["areaImg"],
            ["areaDetails"],
            ["areaAction"]
          ]
        }, /* @__PURE__ */ this.$render("i-image", {
          class: imageStyle,
          width: "100%",
          height: "100%",
          padding: { top: "1rem", left: "1rem", right: "1rem" },
          overflow: "hidden",
          grid: { area: "areaImg" },
          url: product.img
        }), /* @__PURE__ */ this.$render("i-vstack", {
          gap: "0.5rem",
          grid: { area: "areaDetails" },
          padding: { left: "1rem", right: "1rem" }
        }, /* @__PURE__ */ this.$render("i-label", {
          caption: product.name,
          font: { weight: 600 }
        }), /* @__PURE__ */ this.$render("i-hstack", {
          gap: "0.5rem"
        }, /* @__PURE__ */ this.$render("i-vstack", {
          gap: "0.25rem"
        }, /* @__PURE__ */ this.$render("i-label", {
          caption: "Price",
          font: { size: "0.75rem", color: Theme2.colors.secondary.main, weight: 600 }
        }), /* @__PURE__ */ this.$render("i-label", {
          caption: `${formatNumber(product.price)} ${product.token}`,
          font: { size: "0.75rem", weight: 600 }
        })), /* @__PURE__ */ this.$render("i-vstack", {
          gap: "0.25rem"
        }, /* @__PURE__ */ this.$render("i-label", {
          caption: "Remaining",
          font: { size: "0.75rem", color: Theme2.colors.secondary.main, weight: 600 }
        }), /* @__PURE__ */ this.$render("i-label", {
          caption: formatNumber(product.quantity),
          font: { size: "0.75rem", weight: 600 }
        })))), /* @__PURE__ */ this.$render("i-vstack", {
          width: "100%",
          verticalAlignment: "center"
        }, /* @__PURE__ */ this.$render("i-button", {
          class: actionButtonStyle,
          width: "auto",
          height: 45,
          caption: "Add to Cart",
          icon: { width: 18, height: 18, name: "cart-plus" },
          background: { color: "transparent" },
          border: { width: "1px 0 0", style: "solid", color: "rgba(217,225,232,.38)", radius: "0 0 5px 5px" },
          font: { size: "0.875rem", weight: 600 }
        }))));
      });
    }
    renderVerticalList(products) {
      this.pnlCardBody.clearInnerHTML();
      products.forEach((product) => {
        this.pnlCardBody.append(/* @__PURE__ */ this.$render("i-grid-layout", {
          width: "100%",
          height: "100%",
          class: cardItemStyle,
          padding: { top: "1rem", bottom: "1rem", left: "1rem", right: "1rem" },
          border: { top: { width: 1, style: "solid", color: "rgba(217,225,232,.38)" } },
          gap: { column: "1rem", row: "1rem" },
          templateColumns: ["150px", "auto", "min-content"],
          templateAreas: [
            ["areaImg", "areaDetails", "areaAction"]
          ]
        }, /* @__PURE__ */ this.$render("i-image", {
          class: imageStyle,
          width: "100%",
          height: "100%",
          overflow: "hidden",
          grid: { area: "areaImg" },
          url: product.img
        }), /* @__PURE__ */ this.$render("i-vstack", {
          gap: "0.5rem",
          grid: { area: "areaDetails" },
          verticalAlignment: "center"
        }, /* @__PURE__ */ this.$render("i-label", {
          caption: product.name,
          font: { weight: 600 }
        }), /* @__PURE__ */ this.$render("i-hstack", {
          gap: "0.5rem"
        }, /* @__PURE__ */ this.$render("i-vstack", {
          gap: "0.25rem"
        }, /* @__PURE__ */ this.$render("i-label", {
          caption: "Price",
          font: { size: "0.75rem", color: Theme2.colors.secondary.main, weight: 600 }
        }), /* @__PURE__ */ this.$render("i-label", {
          caption: `${formatNumber(product.price)} ${product.token}`,
          font: { size: "0.75rem", weight: 600 }
        })), /* @__PURE__ */ this.$render("i-vstack", {
          gap: "0.25rem"
        }, /* @__PURE__ */ this.$render("i-label", {
          caption: "Remaining",
          font: { size: "0.75rem", color: Theme2.colors.secondary.main, weight: 600 }
        }), /* @__PURE__ */ this.$render("i-label", {
          caption: formatNumber(product.quantity),
          font: { size: "0.75rem", weight: 600 }
        })))), /* @__PURE__ */ this.$render("i-vstack", {
          width: "100%",
          verticalAlignment: "center"
        }, /* @__PURE__ */ this.$render("i-button", {
          class: actionButtonStyle,
          width: "auto",
          height: 45,
          icon: { width: 18, height: 18, name: "cart-plus" },
          background: { color: "transparent" },
          border: { width: 1, style: "solid", color: "rgba(217,225,232,.38)" }
        }))));
      });
    }
    renderViewAll() {
      this.pnlCardFooter.clearInnerHTML();
      if (this._data.itemsToShow && this._data.itemsToShow < data_json_default.length) {
        this.pnlCardFooter.appendChild(/* @__PURE__ */ this.$render("i-hstack", {
          class: "pointer",
          width: "100%",
          height: 45,
          background: { color: Theme2.background.paper },
          border: { top: { width: 1, style: "solid", color: "rgba(217,225,232,.38)" } },
          horizontalAlignment: "center",
          verticalAlignment: "center"
        }, /* @__PURE__ */ this.$render("i-label", {
          caption: "View All",
          font: { size: "0.875rem", color: Theme2.colors.primary.main, weight: 600 },
          link: { href: this._data.viewAllUrl, target: "_self" }
        })));
      }
    }
    renderCarousel(products) {
      this.pnlCardBody.clearInnerHTML();
      this.pnlCardFooter.clearInnerHTML();
      const carousel = /* @__PURE__ */ this.$render("i-carousel-slider", {
        class: carouselStyle,
        width: "100%",
        minHeight: "200px",
        slidesToShow: 1
      });
      const items = products.map((product) => {
        const item = /* @__PURE__ */ this.$render("i-grid-layout", {
          width: "100%",
          height: "100%",
          class: cardItemStyle,
          padding: { top: "1rem", bottom: "1rem", left: "1rem", right: "1rem" },
          border: { top: { width: 1, style: "solid", color: "rgba(217,225,232,.38)" } },
          gap: { column: "1rem", row: "1rem" },
          templateColumns: ["2fr", "1fr"],
          templateAreas: [
            ["areaImg", "areaImg"],
            ["areaDetails", "areaAction"]
          ]
        }, /* @__PURE__ */ this.$render("i-image", {
          class: imageStyle,
          width: "100%",
          height: "100%",
          overflow: "hidden",
          grid: { area: "areaImg" },
          url: product.img
        }), /* @__PURE__ */ this.$render("i-vstack", {
          gap: "0.5rem",
          grid: { area: "areaDetails" }
        }, /* @__PURE__ */ this.$render("i-label", {
          caption: product.name,
          font: { weight: 600 }
        }), /* @__PURE__ */ this.$render("i-hstack", {
          gap: "0.5rem"
        }, /* @__PURE__ */ this.$render("i-vstack", {
          gap: "0.25rem"
        }, /* @__PURE__ */ this.$render("i-label", {
          caption: "Price",
          font: { size: "0.75rem", color: Theme2.colors.secondary.main, weight: 600 }
        }), /* @__PURE__ */ this.$render("i-label", {
          caption: `${formatNumber(product.price)} ${product.token}`,
          font: { size: "0.75rem", weight: 600 }
        })), /* @__PURE__ */ this.$render("i-vstack", {
          gap: "0.25rem"
        }, /* @__PURE__ */ this.$render("i-label", {
          caption: "Remaining",
          font: { size: "0.75rem", color: Theme2.colors.secondary.main, weight: 600 }
        }), /* @__PURE__ */ this.$render("i-label", {
          caption: formatNumber(product.quantity),
          font: { size: "0.75rem", weight: 600 }
        })))), /* @__PURE__ */ this.$render("i-vstack", {
          width: "100%",
          verticalAlignment: "center"
        }, /* @__PURE__ */ this.$render("i-button", {
          class: actionButtonStyle,
          width: "auto",
          height: 45,
          icon: { width: 18, height: 18, name: "cart-plus" },
          background: { color: "transparent" },
          border: { width: 1, style: "solid", color: "rgba(217,225,232,.38)" }
        })));
        return {
          name: void 0,
          controls: [item]
        };
      });
      this.pnlCardBody.append(carousel);
      carousel.items = items;
      if (products.length > 1)
        this.renderControls(carousel);
    }
    renderControls(carousel) {
      this.pnlControls.appendChild(/* @__PURE__ */ this.$render("i-button", {
        width: 45,
        height: 45,
        icon: { name: "chevron-left", fill: "rgba(160,168,177,.68)" },
        background: { color: "transparent" },
        border: { width: 1, style: "solid", color: "rgba(217,225,232,.38)" },
        onClick: () => carousel.prev()
      }));
      this.pnlControls.appendChild(/* @__PURE__ */ this.$render("i-button", {
        width: 45,
        height: 45,
        icon: { name: "chevron-right", fill: "rgba(160,168,177,.68)" },
        background: { color: "transparent" },
        border: { width: 1, style: "solid", color: "rgba(217,225,232,.38)" },
        onClick: () => carousel.next()
      }));
    }
    render() {
      return /* @__PURE__ */ this.$render("i-panel", {
        id: "pnlBlock",
        class: cardStyle
      }, /* @__PURE__ */ this.$render("i-panel", {
        id: "pnlCard"
      }, /* @__PURE__ */ this.$render("i-hstack", {
        id: "pnlCardHeader",
        verticalAlignment: "center",
        horizontalAlignment: "space-between",
        padding: { top: "1.5rem", bottom: "1.5rem", left: "1.5rem", right: "1.5rem" }
      }, /* @__PURE__ */ this.$render("i-vstack", {
        gap: "0.5rem"
      }, /* @__PURE__ */ this.$render("i-label", {
        id: "lblTitle",
        font: { size: "1.1rem", weight: 600 }
      }), /* @__PURE__ */ this.$render("i-label", {
        id: "lblDesc",
        font: { size: "0.875rem", color: Theme2.colors.secondary.main }
      })), /* @__PURE__ */ this.$render("i-hstack", {
        id: "pnlControls",
        class: controlStyle,
        gap: "0.5rem"
      })), /* @__PURE__ */ this.$render("i-panel", {
        id: "pnlCardBody"
      }), /* @__PURE__ */ this.$render("i-panel", {
        id: "pnlCardFooter"
      })), /* @__PURE__ */ this.$render("pageblock-card-config", {
        id: "cardConfig",
        visible: false
      }));
    }
  };
  Module1 = __decorateClass([
    import_components4.customModule
  ], Module1);
})();
