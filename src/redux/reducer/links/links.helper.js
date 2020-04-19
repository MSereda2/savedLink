// // Не думаю что это самое лучшие решение

// export const filterByHelper = (state,category) => {
//   switch(category) {
//     case 'home':
//       return {
//         ...state,
//         filterBy: { home: true },
//       }
//     case 'dev':
//       return {
//         ...state,
//         filterBy: { dev: true },
//       }
//     case 'life':
//       return {
//         ...state,
//         filterBy: { life: true },
//       }
//     case 'movie':
//       return {
//         ...state,
//         filterBy: { movie: true },
//       }
//     case 'game':
//       return {
//         ...state,
//         filterBy: { game: true },
//       }
//     default: return state;
//   }

// }