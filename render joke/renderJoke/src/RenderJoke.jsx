
export default function Joke(props){
  return (
   <div className="joke">
    <h1></h1>
    <p>setup: {props.setup}</p>
    <p>Punchline: {props.punchline}</p>
   </div>

  );
}