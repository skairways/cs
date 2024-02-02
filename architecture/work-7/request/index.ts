interface IRquestProps {
  use: any;
}

function request(url: string, props: IRquestProps) {
  const { use } = props;
  console.log(use);
  
  return use(url);
}

request.XHR = async (url: string) => {
  const xhr = new XMLHttpRequest()
  xhr.open('GET', url)
  return xhr.send()
};

request.Fetch = fetch;

console.log(
  request("https://dog.ceo/api/breeds/image/random", { use: request.XHR })
);
