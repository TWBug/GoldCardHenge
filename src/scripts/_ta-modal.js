// window.taLanguageModal = function () {
//     return {
//         language: 'en',
//         default: {
//             language: 'en',
//             supported: ['en', 'zh'],
//         },
//         init() {
//             this.loadLanguage('en')
//         },
//         loadLanguage(language) {
//             const url = location.origin + '/' + language + '/modal/'
//             fetch(url)
//                 .then((response) => {
//                     console.info('response', response.body.getReader());
//                 })
//                 .catch((error) => {
//                     console.warn(error)
//                 })
//         },
//     }
// }
