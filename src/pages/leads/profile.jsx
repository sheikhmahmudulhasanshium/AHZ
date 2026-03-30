import { Button,  } from "@mui/material";
import EmailIcon from '@mui/icons-material/Email';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import PersonIcon from '@mui/icons-material/Person';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { Phone } from "@mui/icons-material";
const Profile = () => {
    return ( 
        <section className="flex w-full justify-between">
            <div className="flex w-full justify-betweeen items-center">

                    <img src='/favicon.ico' alt="profile" width={100} height={100} backgroundColor="#f000000"/>
                    <Button variant="outlined" startIcon={<EmailIcon/>} >Email</Button>            
            </div>
            <div style={{"grid":"grid-cols-2", width:"full"}}>            
                <div style={{"colspan":"col-span-1"}}>
                <h2>Name</h2>

                <p>AHZ</p>
                <p><CalendarTodayIcon/>Created: 2026-03-27</p>

            </div>
            <div style={{"colspan":"col-span-1"}}>
                <p><PersonIcon/>Assigned To: Exam</p>
            <p><HowToRegIcon/>Status: Leads</p> 
            <p><CheckCircleIcon/>Sub-status: New</p>
            <p><Phone/> +8801xxxxxxx </p>
            </div>
</div>


        </section>
     );
}
 
export default Profile;