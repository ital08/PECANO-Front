export class URIHelper {
  join(path: string, key: string): string {
    return path != null ? path + '[' + key + ']' : key;
  }
  /**
   * Funcion que convierte un objeto|array en una cadena uri codificada.
   *
   * @param {object} obj objeto que será convertido a una uri
   * @param {boolean} encodeKey valor que indica si debe codificar los keys, por defecto es false.
   * @param {string} path parametro opcional usado en la recursividad [usado en la recursividad].
   * @param {array|object} result objeto principal donde se guardarán todos los datos [usado en la recursividad].
   */
  obj2uri(obj: any, encodeKey = false, path?: any, result?: any): any {
    // Si es la primerera llamada osea cuando no es un llamado de la recursividad
    if (result === undefined) {
      const type = Object.prototype.toString.call(obj);
      if (type === '[object Object]') {
        result = {};
      } else if (type === '[object Array]') {
        result = [];
      } else {
        return;
      }
    }
    for (const key in obj) {
      if (typeof key !== 'undefined') {
        if (!obj.hasOwnProperty(key)) {
          continue;
        }
        const val = obj[key];
        if (val == null) {
          continue;
        }
        switch (Object.prototype.toString.call(val)) {
          case '[object Array]':
          case '[object Object]':
            this.obj2uri(val, encodeKey, this.join(path, key), result);
            break;
          default:
            result[this.join(path, key)] = encodeKey
              ? val
              : encodeURIComponent(val);
            break;
        }
      }
    }

    return Object.entries(result)
      .map(function (pair, i) {
        return (
          encodeKey ? pair.map((i: any) => encodeURIComponent(i)) : pair
        ).join('=');
      })
      .join('&');
  }
}
