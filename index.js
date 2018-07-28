/// Javascript code 

// Js Object
function Airplane (model , capacity , maxSpeed) {
   this.Model = model;
   this.Capacity = capacity;
   this.MaxSpeed = maxSpeed;
  return{
      Model : this.Model,
      Capacity : this.Capacity,
      MaxSpeed : this.MaxSpeed,
      print : function(){
          console.log('Model : '+this.Model +' Seating Capacity : ' + this.Capacity + ' Max Speed : '+this.MaxSpeed);
      }
  }
}

// Create plane objects
var boeing = new Airplane('Boeing',1000 , 1500);
var tejas = new Airplane('Tejas',2 , 2500);
var jaguar = new Airplane('Jaguar',2 , 3500);

// Print planes
boeing.print();
jaguar.print();
tejas.print();

// Increasse speed by 10
boeing.MaxSpeed += 10;
jaguar.MaxSpeed += 10;
tejas.MaxSpeed += 10; 

console.log('Speed increaded by 10');
// print again
boeing.print();
jaguar.print();
tejas.print();

delete boeing['MaxSpeed'];
delete jaguar['MaxSpeed'];
delete tejas['MaxSpeed'];

boeing.print();
jaguar.print();
tejas.print();

boeing.AverageSpeed = 600;
jaguar.AverageSpeed = 600;
tejas.AverageSpeed = 600;

boeing.print();
jaguar.print();
tejas.print();