import { createTheme } from 'react-schedule-view';

const customTheme = createTheme("apple", {

    style: {
      dayLabels: {
        fontFamily: 'Roboto',
        color: 'Black',
        fontSize: '0.8rem',
        fontWeight: 'bold',
      },
      timeScaleLabels: {
        color: 'red',
        textTransform: 'lowercase',
        fontSize: '0.9rem',
        fontWeight: 'bold',
      },
    },
  })

  export {customTheme}