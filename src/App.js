import logo from './logo.svg';
import './App.css';
import SemMarks1 from './Classes/SemMarks1';


function App() {

  let prasad = new SemMarks1();
prasad.engMarks = 95;
prasad.telMarks = 92;
prasad.physMarks =99;
prasad.computerMarks =88;

console.log(SemMarks1.passMarks)
SemMarks1.aboutPrasad();

prasad.calculateResult();


 let namesOfBikes=[
  "Kawasaki","Ninja200","Bmw","Hero","Duke","KTM","Honda","Xlsuper100","Yamaha","Rx100","Splender+","Ducati","Suzuki","BajajPulusar","Royalenfield"
 ]
  return (
    <div className="App">
      <h2>Bike Names in Array Methods</h2>
<div>      <button type="button" onClick ={()=>{
      console.log(namesOfBikes.length)
      for(let i=0;i< namesOfBikes.length;i++){
        console.log(namesOfBikes[i]);
      }
      // console.log(namesOfBikes[7]);
      // console.log(namesOfBikes[6]);
      // console.log(namesOfBikes[5]);
      // console.log(namesOfBikes[4]);
      }}>Length</button></div>
<div>      <button type="button" onClick ={()=>{
        //  console.log(namesOfBikes.length)
         for(let i=0;i< namesOfBikes.length;i++){
           console.log(namesOfBikes.at(i));
         }


      }}>at</button></div>
<div>      <button type="button" onClick ={()=>{
        console.log(namesOfBikes.toString());
        

      }}>toString</button></div>
     <div> <button type="button" onClick ={()=>{
        console.log(namesOfBikes.join(" @ "));
      }}>join</button></div>
      {/* <button type="button" onClick ={()=>{

        console.log(namesOfBikes);
        delete namesOfBikes[5];
        console.log(namesOfBikes);
      }}>Delete</button> */}
<div>      <button type="button" onClick ={()=>{
        console.log(namesOfBikes);
        console.log(namesOfBikes.pop());
        console.log(namesOfBikes);
        



      }}>pop</button></div>
<div>      <button type="button" onClick ={()=>{
        console.log(namesOfBikes);
        console.log(namesOfBikes.shift());
        console.log(namesOfBikes)
      }}>Shift</button></div>
<div>      <button type="button" onClick ={()=>{
        console.log(namesOfBikes);
        console.log(namesOfBikes.push("Ampere","Aprilia"));
        console.log(namesOfBikes)

      }}>Push</button></div>
      
   <div>   <button type="button" onClick ={()=>{
        console.log(namesOfBikes);
        console.log(namesOfBikes.unshift("Vesepa","Ultraviolette"));
        console.log(namesOfBikes)

      }}>unshift</button></div>
      
<div>      <button type="button" onClick ={()=>{
        console.log(namesOfBikes);
        console.log(namesOfBikes.splice(0,0,"Tork","Okaya"));
        console.log(namesOfBikes);
        console.log(namesOfBikes.splice(4,2))
        console.log(namesOfBikes);
      }}>Splice</button></div>
      
    </div>
  );
}

export default App;
