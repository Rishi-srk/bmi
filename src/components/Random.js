let countries=["india","australia","pakistan","srilanka","bangladesh","america","canada","france","japan","china","russia","spain","italy","malaysia","thailand","ukraine","alaska","brazil","switzerland","belgium","chile","southafrica"];
  const Random=()=>{

    return( countries[Math.floor(Math.random()*countries.length)]);
};
export  default Random;
