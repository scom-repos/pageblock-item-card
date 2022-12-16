var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define("@itemCard/main/index.css.ts", ["require", "exports", "@ijstech/components"], function (require, exports, components_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.controlStyle = exports.carouselStyle = exports.actionButtonStyle = exports.imageStyle = exports.cardItemStyle = exports.cardStyle = void 0;
    const Theme = components_1.Styles.Theme.ThemeVars;
    exports.cardStyle = components_1.Styles.style({
        boxShadow: 'rgb(0 0 0 / 8%) 0px 4px 12px',
        $nest: {
            'i-link > a': {
                textDecoration: 'none'
            },
            'i-panel.container': {
                width: Theme.layout.container.width,
                maxWidth: Theme.layout.container.maxWidth,
                overflow: Theme.layout.container.overflow,
                textAlign: Theme.layout.container.textAlign,
                margin: '0 auto'
            }
        }
    });
    exports.cardItemStyle = components_1.Styles.style({
        cursor: 'pointer',
        $nest: {
            '&:hover i-button': {
                background: Theme.colors.primary.dark,
                color: Theme.colors.primary.contrastText
            },
            '&:hover i-button > i-icon': {
                fill: '#fff !important'
            }
        }
    });
    exports.imageStyle = components_1.Styles.style({
        $nest: {
            '> img': {
                width: '100%',
                borderRadius: 5
            }
        }
    });
    exports.actionButtonStyle = components_1.Styles.style({
        boxShadow: 'none',
        $nest: {
            '&:hover': {
                background: Theme.colors.primary.dark,
                color: Theme.colors.primary.contrastText
            },
            '> i-icon:hover': {
                fill: '#fff !important'
            }
        }
    });
    exports.carouselStyle = components_1.Styles.style({
        $nest: {
            '.dots-pagination': {
                height: 45,
                background: Theme.background.paper,
                borderTop: '1px solid rgba(217,225,232,.38)',
                marginTop: 0,
            },
            '.dots-pagination .--dot > span': {
                minHeight: '0.6rem',
                minWidth: '0.6rem',
            }
        }
    });
    exports.controlStyle = components_1.Styles.style({
        $nest: {
            'i-button': {
                boxShadow: 'none',
            },
            'i-button > span': {
                display: 'none'
            },
            'i-button:not(.disabled):hover': {
                background: 'transparent',
                boxShadow: 'none',
                borderColor: 'rgba(117,124,131,.68)',
                $nest: {
                    '> i-icon': {
                        fill: 'rgba(117,124,131,.68) !important'
                    }
                }
            }
        }
    });
});
define("@itemCard/main/data.json.ts", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    ///<amd-module name='@itemCard/main/data.json.ts'/> 
    const productList = [
        {
            name: 'Gift Card A',
            price: 99,
            token: 'USDT',
            quantity: 1000,
            img: 'https://images.unsplash.com/photo-1612404730960-5c71577fca11?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFyaW98ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60'
        },
        {
            name: 'Gift Card B',
            price: 188,
            token: 'USDT',
            quantity: 1000,
            img: 'https://images.unsplash.com/photo-1612404730960-5c71577fca11?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFyaW98ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60'
        },
        {
            name: 'Gift Card C',
            price: 349,
            token: 'USDT',
            quantity: 1000,
            img: 'https://images.unsplash.com/photo-1612404730960-5c71577fca11?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFyaW98ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60'
        },
        {
            name: 'Gift Card D',
            price: 500,
            token: 'USDT',
            quantity: 1000,
            img: 'https://images.unsplash.com/photo-1612404730960-5c71577fca11?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFyaW98ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60'
        },
        {
            name: 'Game Pass A',
            price: 198,
            token: 'USDT',
            quantity: 1000,
            img: 'https://images.unsplash.com/photo-1634309490604-1270c0d486e8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Zm9ydG5pdGV8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60'
        },
        {
            name: 'Game Pass B',
            price: 198,
            token: 'USDT',
            quantity: 1000,
            img: 'https://images.unsplash.com/photo-1634309490604-1270c0d486e8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Zm9ydG5pdGV8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60'
        }
    ];
    exports.default = productList;
});
define("@itemCard/main", ["require", "exports", "@ijstech/components", "@itemCard/global", "@itemCard/config", "@itemCard/main/index.css.ts", "@itemCard/main/data.json.ts"], function (require, exports, components_2, global_1, config_1, index_css_1, data_json_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Config = void 0;
    exports.Config = config_1.default;
    const Theme = components_2.Styles.Theme.ThemeVars;
    let Module1 = class Module1 extends components_2.Module {
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
        async config() { }
        onUpdateBlock() {
            this.lblTitle.caption = this._data.title || "";
            this.lblDesc.caption = this._data.description || "";
            this.renderProductItems();
        }
        renderProductItems() {
            const products = this._data.itemsToShow ? data_json_1.default.slice(0, this._data.itemsToShow) : data_json_1.default;
            const type = this._data.type || 'horizontal-list';
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
            const lytItems = (this.$render("i-card-layout", { width: "100%", padding: { bottom: '1rem', left: '1rem', right: '1rem' }, gap: { column: '1rem', row: '0.75rem' }, columnsPerRow: 4, cardMinWidth: "250px" }));
            this.pnlCardBody.appendChild(lytItems);
            products.forEach(product => {
                lytItems.append(this.$render("i-grid-layout", { width: "100%", height: "100%", class: index_css_1.cardItemStyle, border: { width: 1, style: 'solid', color: 'rgba(217,225,232,.38)', radius: 5 }, gap: { column: '1rem', row: '1rem' }, templateAreas: [
                        ["areaImg"],
                        ["areaDetails"],
                        ["areaAction"]
                    ] },
                    this.$render("i-image", { class: index_css_1.imageStyle, width: "100%", height: "100%", padding: { top: '1rem', left: '1rem', right: '1rem' }, overflow: "hidden", grid: { area: "areaImg" }, url: product.img }),
                    this.$render("i-vstack", { gap: "0.5rem", grid: { area: "areaDetails" }, padding: { left: '1rem', right: '1rem' } },
                        this.$render("i-label", { caption: product.name, font: { weight: 600 } }),
                        this.$render("i-hstack", { gap: "0.5rem" },
                            this.$render("i-vstack", { gap: "0.25rem" },
                                this.$render("i-label", { caption: "Price", font: { size: '0.75rem', color: Theme.colors.secondary.main, weight: 600 } }),
                                this.$render("i-label", { caption: `${global_1.formatNumber(product.price)} ${product.token}`, font: { size: '0.75rem', weight: 600 } })),
                            this.$render("i-vstack", { gap: "0.25rem" },
                                this.$render("i-label", { caption: "Remaining", font: { size: '0.75rem', color: Theme.colors.secondary.main, weight: 600 } }),
                                this.$render("i-label", { caption: global_1.formatNumber(product.quantity), font: { size: '0.75rem', weight: 600 } })))),
                    this.$render("i-vstack", { width: "100%", verticalAlignment: "center" },
                        this.$render("i-button", { class: index_css_1.actionButtonStyle, width: "auto", height: 45, caption: "Add to Cart", icon: { width: 18, height: 18, name: 'cart-plus' }, background: { color: 'transparent' }, border: { width: "1px 0 0", style: 'solid', color: 'rgba(217,225,232,.38)', radius: "0 0 5px 5px" }, font: { size: '0.875rem', weight: 600 } }))));
            });
        }
        renderVerticalList(products) {
            this.pnlCardBody.clearInnerHTML();
            products.forEach(product => {
                this.pnlCardBody.append(this.$render("i-grid-layout", { width: "100%", height: "100%", class: index_css_1.cardItemStyle, padding: { top: '1rem', bottom: '1rem', left: '1rem', right: '1rem' }, border: { top: { width: 1, style: 'solid', color: 'rgba(217,225,232,.38)' } }, gap: { column: '1rem', row: '1rem' }, templateColumns: ["150px", "auto", "min-content"], templateAreas: [
                        ["areaImg", "areaDetails", "areaAction"]
                    ] },
                    this.$render("i-image", { class: index_css_1.imageStyle, width: "100%", height: "100%", overflow: "hidden", grid: { area: "areaImg" }, url: product.img }),
                    this.$render("i-vstack", { gap: "0.5rem", grid: { area: "areaDetails" }, verticalAlignment: "center" },
                        this.$render("i-label", { caption: product.name, font: { weight: 600 } }),
                        this.$render("i-hstack", { gap: "0.5rem" },
                            this.$render("i-vstack", { gap: "0.25rem" },
                                this.$render("i-label", { caption: "Price", font: { size: '0.75rem', color: Theme.colors.secondary.main, weight: 600 } }),
                                this.$render("i-label", { caption: `${global_1.formatNumber(product.price)} ${product.token}`, font: { size: '0.75rem', weight: 600 } })),
                            this.$render("i-vstack", { gap: "0.25rem" },
                                this.$render("i-label", { caption: "Remaining", font: { size: '0.75rem', color: Theme.colors.secondary.main, weight: 600 } }),
                                this.$render("i-label", { caption: global_1.formatNumber(product.quantity), font: { size: '0.75rem', weight: 600 } })))),
                    this.$render("i-vstack", { width: "100%", verticalAlignment: "center" },
                        this.$render("i-button", { class: index_css_1.actionButtonStyle, width: "auto", height: 45, icon: { width: 18, height: 18, name: 'cart-plus' }, background: { color: 'transparent' }, border: { width: 1, style: 'solid', color: 'rgba(217,225,232,.38)' } }))));
            });
        }
        renderViewAll() {
            this.pnlCardFooter.clearInnerHTML();
            if (this._data.itemsToShow && this._data.itemsToShow < data_json_1.default.length) {
                this.pnlCardFooter.appendChild(this.$render("i-hstack", { class: "pointer", width: "100%", height: 45, background: { color: Theme.background.paper }, border: { top: { width: 1, style: 'solid', color: 'rgba(217,225,232,.38)' } }, horizontalAlignment: 'center', verticalAlignment: 'center' },
                    this.$render("i-label", { caption: "View All", font: { size: '0.875rem', color: Theme.colors.primary.main, weight: 600 }, link: { href: this._data.viewAllUrl, target: "_self" } })));
            }
        }
        renderCarousel(products) {
            this.pnlCardBody.clearInnerHTML();
            this.pnlCardFooter.clearInnerHTML();
            const carousel = (this.$render("i-carousel-slider", { class: index_css_1.carouselStyle, width: "100%", minHeight: '200px', slidesToShow: 1, swipe: true }));
            const items = products.map(product => {
                const item = (this.$render("i-grid-layout", { width: "100%", height: "100%", class: index_css_1.cardItemStyle, padding: { top: '1rem', bottom: '1rem', left: '1rem', right: '1rem' }, border: { top: { width: 1, style: 'solid', color: 'rgba(217,225,232,.38)' } }, gap: { column: '1rem', row: '1rem' }, templateColumns: ["2fr", "1fr"], templateAreas: [
                        ["areaImg", "areaImg"],
                        ["areaDetails", "areaAction"]
                    ] },
                    this.$render("i-image", { class: index_css_1.imageStyle, width: "100%", height: "100%", overflow: "hidden", grid: { area: "areaImg" }, url: product.img }),
                    this.$render("i-vstack", { gap: "0.5rem", grid: { area: "areaDetails" } },
                        this.$render("i-label", { caption: product.name, font: { weight: 600 } }),
                        this.$render("i-hstack", { gap: "0.5rem" },
                            this.$render("i-vstack", { gap: "0.25rem" },
                                this.$render("i-label", { caption: "Price", font: { size: '0.75rem', color: Theme.colors.secondary.main, weight: 600 } }),
                                this.$render("i-label", { caption: `${global_1.formatNumber(product.price)} ${product.token}`, font: { size: '0.75rem', weight: 600 } })),
                            this.$render("i-vstack", { gap: "0.25rem" },
                                this.$render("i-label", { caption: "Remaining", font: { size: '0.75rem', color: Theme.colors.secondary.main, weight: 600 } }),
                                this.$render("i-label", { caption: global_1.formatNumber(product.quantity), font: { size: '0.75rem', weight: 600 } })))),
                    this.$render("i-vstack", { width: "100%", verticalAlignment: "center" },
                        this.$render("i-button", { class: index_css_1.actionButtonStyle, width: "auto", height: 45, icon: { width: 18, height: 18, name: 'cart-plus' }, background: { color: 'transparent' }, border: { width: 1, style: 'solid', color: 'rgba(217,225,232,.38)' } }))));
                return {
                    name: undefined,
                    controls: [item]
                };
            });
            this.pnlCardBody.append(carousel);
            carousel.items = items;
            if (products.length > 1)
                this.renderControls(carousel);
        }
        renderControls(carousel) {
            this.pnlControls.appendChild(this.$render("i-button", { width: 45, height: 45, icon: { name: 'chevron-left', fill: 'rgba(160,168,177,.68)' }, background: { color: 'transparent' }, border: { width: 1, style: 'solid', color: 'rgba(217,225,232,.38)' }, onClick: () => carousel.prev() }));
            this.pnlControls.appendChild(this.$render("i-button", { width: 45, height: 45, icon: { name: 'chevron-right', fill: 'rgba(160,168,177,.68)' }, background: { color: 'transparent' }, border: { width: 1, style: 'solid', color: 'rgba(217,225,232,.38)' }, onClick: () => carousel.next() }));
        }
        render() {
            return (this.$render("i-panel", { id: "pnlBlock", class: index_css_1.cardStyle },
                this.$render("i-panel", { class: "container" },
                    this.$render("i-panel", { id: "pnlCard" },
                        this.$render("i-hstack", { id: "pnlCardHeader", verticalAlignment: 'center', horizontalAlignment: 'space-between', padding: { top: '1.5rem', bottom: '1.5rem', left: '1.5rem', right: '1.5rem' } },
                            this.$render("i-vstack", { gap: "0.5rem" },
                                this.$render("i-label", { id: "lblTitle", font: { size: '1.1rem', weight: 600 } }),
                                this.$render("i-label", { id: "lblDesc", font: { size: '0.875rem', color: Theme.colors.secondary.main } })),
                            this.$render("i-hstack", { id: "pnlControls", class: index_css_1.controlStyle, gap: "0.5rem" })),
                        this.$render("i-panel", { id: "pnlCardBody" }),
                        this.$render("i-panel", { id: "pnlCardFooter" })),
                    this.$render("pageblock-card-config", { id: "cardConfig", visible: false }))));
        }
    };
    Module1 = __decorate([
        components_2.customModule
    ], Module1);
    exports.default = Module1;
});
