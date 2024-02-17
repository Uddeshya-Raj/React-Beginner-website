export default function Card({image, title, description}){
  //key is used for ordering of list elements. Each key is unique.
  return(
    <li> 
      <img src={image} alt={title}></img>
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
}