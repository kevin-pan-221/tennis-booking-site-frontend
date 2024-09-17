import GuestForm from "./components/GuestForm";
import TotalGuestCount from "./components/TotalGuestCount";

export default function Home() {
  return (
    <body bgcolor="powderblue">
    <div>
      <h1> <font color="brown"> <center> Welcome to the Full Stack at Brown Holloween party registration! </center> </font> </h1>
      <GuestForm />
      <br /> <br />
      <hr /> <hr />
      <br /> <br />
      <TotalGuestCount />
    </div>
    </body>
  );
}
