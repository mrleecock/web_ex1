import "./styles.css";

if (document.readyState !== "loading") {
  initializeCode();
} else {
  document.addEventListener("DOMContentLoaded", function () {
    initializeCode();
  });
}

function initializeCode() {
  document.getElementById("app").innerHTML = "<h1>Hello!</h1>";
  exercise()
}


function create_container_div()
{
  let element = document.createElement('div');
  element.classList.add('container');
  return element;
}

function set_pic(img_element, breed_name)
{ 
  fetch('https://dog.ceo/api/breed/' + breed_name + '/images/random').then(res => res.json()).then(res => img_element.src = res.message);
}

function set_text(text_element, breed_name)
{
  fetch('https://en.wikipedia.org/api/rest_v1/page/summary/' + breed_name).then(res => res.json()).then(res => text_element.innerHTML = res.extract);
}

function create_wiki_item(breed)
{
  let wiki_item = document.createElement('div');
  wiki_item.classList.add('wiki-item');
  let wiki_header = document.createElement('h1');
  wiki_header.classList.add('wiki-header');
  wiki_header.innerHTML = breed;
  let wiki_content = document.createElement('div');
  wiki_content.classList.add('wiki-content');
  let wiki_text = document.createElement('p');
  wiki_text.classList.add('wiki-text');
  set_text(wiki_text, breed);
  let img_container = document.createElement('div');
  img_container.classList.add('img-container');
  let wiki_img = document.createElement('img');
  wiki_img.classList.add('wiki-img');
  set_pic(wiki_img, breed);

  img_container.appendChild(wiki_img);
  
  wiki_content.appendChild(img_container);
  wiki_content.appendChild(wiki_text);
  wiki_item.appendChild(wiki_header)
  wiki_item.appendChild(wiki_content)
  return wiki_item;
}

function exercise()
{
  const breed_list = [
    'beagle',
    'vizsla',
    'briard',
    'pug',
    'doberman'
  ];
  let container = create_container_div();
  document.body.appendChild(container);
  for (let i = 0; i < breed_list.length; ++i)
  {
    let wiki_item = create_wiki_item(breed_list[i]);
    container.appendChild(wiki_item);
  }
}
