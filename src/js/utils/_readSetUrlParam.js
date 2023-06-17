function readUrlParameter() {
  const url_string = window.location.href;
  const url = new URL(url_string);
  let gender = url.searchParams.get("shoe");
  if (gender === 'flight' || gender === 'enduris' || gender === 'infinite') {
    return gender;
  }
}

function setUrlParameter(url, key, value) {
  let k = encodeURIComponent(key),
    urlQueryString = '',
    v = encodeURIComponent(value);

  let baseUrl = location.protocol + '//' + location.host + location.pathname,
    newParam = k + '=' + v,
    params = '?' + newParam,
    hash = location.hash

  if (url.split('?')[1] === undefined) { // if there are no query strings, make urlQueryString empty
    urlQueryString = '';
  } else {
    urlQueryString = '?' + url.split('?')[1];
  }

  // If the "search" string exists, then build params from it
  if (urlQueryString) {
    let updateRegex = new RegExp('([\?&])' + k + '=[^&]*');
    let removeRegex = new RegExp('([\?&])' + k + '=[^&;]+[&;]?');

    if (v === undefined || v === null || v === '') { // Remove param if value is empty
      params = urlQueryString.replace(removeRegex, "$1");
      params = params.replace(/[&;]$/, "");

    } else if (urlQueryString.match(updateRegex) !== null) { // If param exists already, update it
      params = urlQueryString.replace(updateRegex, "$1" + newParam);

    } else if (urlQueryString == '') { // If there are no query strings
      params = '?' + newParam;
    } else { // Otherwise, add it to end of query string
      params = urlQueryString + '&' + newParam;
    }
  }

  // no parameter was set so we don't need the question mark
  params = params === '?' ? '' : params;

  return baseUrl + params + hash;
}