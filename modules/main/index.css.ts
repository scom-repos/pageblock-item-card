import { Styles } from "@ijstech/components";
const Theme = Styles.Theme.ThemeVars;

export const cardStyle = Styles.style({
  boxShadow: 'rgb(0 0 0 / 8%) 0px 4px 12px',
  $nest: {
    'i-link > a': {
      textDecoration: 'none'
    },
    'i-panel.container': {
      width: Theme.layout.container.width,
      maxWidth: Theme.layout.container.maxWidth,
      overflow: Theme.layout.container.overflow,
      textAlign: (Theme.layout.container.textAlign as any),
      margin: '0 auto'
    }
  }
})

export const cardItemStyle = Styles.style({
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
})

export const imageStyle = Styles.style({
  $nest: {
    '> img': {
      width: '100%',
      borderRadius: 5
    }
  }
})

export const actionButtonStyle = Styles.style({
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
})

export const carouselStyle = Styles.style({
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
})

export const controlStyle = Styles.style({
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
})