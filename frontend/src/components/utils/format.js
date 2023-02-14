const format = {
  formatMoney(value) {
    if (!value || value === null || value === "") {
      return "R$ 0,00";
    }
    //if (typeof "string") value = parseFloat(value);
    function numberToReal(numero) {
      numero = numero.toFixed(2).split(".");
      numero[0] = "R$ " + numero[0].split(/(?=(?:...)*$)/).join(".");
      return numero.join(",");
    }
    let x = numberToReal(value);
    return x;
  },

  formatDate(value) {
    if (value === null) {
      return null;
    }
    return new Date(value).toLocaleString("pt-BR", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      // hour: "2-digit",
      // minute: "2-digit",
    });
  },

  especialCharMask(especialChar) {
    especialChar = especialChar.replace(/[áàãâä]/g, "a");
    especialChar = especialChar.replace(/[ÁÀÃÂÄ]/g, "A");
    especialChar = especialChar.replace(/[éèêë]/ui, "e");
    especialChar = especialChar.replace(/[ÉÈÊË]/ui, "E");
    especialChar = especialChar.replace(/[íìîï]/ui, "i");
    especialChar = especialChar.replace(/[ÍÌÎÏ]/ui, "I");
    especialChar = especialChar.replace(/[óòõôö]/ui, "o");
    especialChar = especialChar.replace(/[ÓÒÕÔÖ]/ui, "O");
    especialChar = especialChar.replace(/[úùûü]/ui, "u");
    especialChar = especialChar.replace(/[ÚÙÛÜ]/ui, "U");
    especialChar = especialChar.replace(/[ç]/ui, "c");
    especialChar = especialChar.replace(/[Ç]/ui, "C");
    return especialChar;
  },
};

export default format;

//   Vue.filter('formatPerc', function (value) {
//     if (!value) { return '0,00 %' }
//     function numberToReal (numero) {
//       numero = numero.toFixed(2).split('.')
//       numero[0] = numero[0].split(/(?=(?:...)*$)/).join('.')
//       return numero.join(',') + ' %'
//     }
//     let x = numberToReal(value)
//     return x
//   })

//   Vue.filter('capitalize', function (value) {
//     if (!value) return ''
//     value = value.toString().toLowerCase()
//     return value.charAt(0).toUpperCase() + value.slice(1)
//   })
// }
