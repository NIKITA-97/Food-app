import User from "./User";
import User2 from "./user2";
import UserComponent from "./UserClassComponent"

const About = () =>  {
    return(
        <div>
<h1>About Us</h1>
<h3>This is About Us page</h3>

<User name={"Nikita(function)"} age={27}/>

<User2 name={"Nikita2(function)"}/>

<UserComponent name={"Nikita(class)"} age={27}/>
<UserComponent name={"Rima(class)"} age={27}/>
</div>
    );
};

export default About;