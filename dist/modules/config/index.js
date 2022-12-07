var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define("@itemCard/config/config.css.ts", ["require", "exports", "@ijstech/components"], function (require, exports, components_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.textareaStyle = void 0;
    exports.textareaStyle = components_1.Styles.style({
        $nest: {
            'textarea': {
                border: 'none',
                outline: 'none'
            }
        }
    });
});
define("@itemCard/config", ["require", "exports", "@ijstech/components", "@itemCard/config/config.css.ts", "@itemCard/global"], function (require, exports, components_2, config_css_1, global_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    let Config = class Config extends components_2.Module {
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
            const type = this._items.find(type => type.value === config.type);
            if (type)
                this.cbCardType.selectedItem = type;
            this.edtItemsToShow.value = config.itemsToShow || "";
            this.edtViewAllUrl.value = config.viewAllUrl || "";
        }
        init() {
            this._items = global_1.getCardTypeOption();
            super.init();
        }
        render() {
            return (this.$render("i-vstack", { id: "pnlConfig", gap: '0.5rem', padding: { top: '1rem', bottom: '1rem', left: '1rem', right: '1rem' } },
                this.$render("i-label", { caption: "Title:" }),
                this.$render("i-input", { id: "edtTitle", width: "100%" }),
                this.$render("i-label", { caption: "Description:" }),
                this.$render("i-input", { id: "edtDesc", class: config_css_1.textareaStyle, width: "100%", height: "auto", resize: "auto-grow", inputType: 'textarea' }),
                this.$render("i-label", { caption: "Card Type:" }),
                this.$render("i-combo-box", { id: "cbCardType", width: "100%", icon: { name: 'angle-down' }, items: this._items }),
                this.$render("i-label", { caption: "Max items to show:" }),
                this.$render("i-input", { id: "edtItemsToShow", width: "100%", inputType: 'number' }),
                this.$render("i-label", { caption: "Contract Entrypoint:" }),
                this.$render("i-input", { id: "edtContract", width: "100%" }),
                this.$render("i-label", { caption: "View all link:" }),
                this.$render("i-input", { id: "edtViewAllUrl", width: "100%" })));
        }
    };
    Config = __decorate([
        components_2.customModule,
        components_2.customElements("pageblock-card-config")
    ], Config);
    exports.default = Config;
});
