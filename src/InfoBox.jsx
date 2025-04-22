import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import './InfoBox.css';
function InfoBox({info}){

    let Winter_URL="https://images.unsplash.com/photo-1453306458620-5bbef13a5bca?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHdpbnRlcnxlbnwwfHwwfHx8MA%3D%3D";
    let Summer_URL="https://images.unsplash.com/photo-1471922694854-ff1b63b20054?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTF8fFN1bW1lcnxlbnwwfHwwfHx8MA%3D%3D";
    let Rainy_URL="https://images.unsplash.com/photo-1640538212466-fd7e9ac47f8b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTM0fHxSYWlueXxlbnwwfHwwfHx8MA%3D%3D";


    

    return(
        <div className="InfoBox">
      
      <div id="card-container">
      <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.humidity>80 ? Rainy_URL : info.temp>25 ? Summer_URL : Winter_URL}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
          <p>temperature = {info.temp}</p>
          <p>temp min = {info.tempMin}</p>
          <p>temp max = {info.tempMax}</p>
          <p>humidity= {info.humidity}</p>
          <p>The weather can be described as {info.weather} and feels like = {info.feels_like}&deg;C</p>

        </Typography>
      </CardContent>
    </Card>
    </div>
 </div>
    )
}

export default InfoBox;

