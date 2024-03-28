import { Button } from "keep-react";
import Marquee from "react-fast-marquee";
const BreakingNews = () => {
    return (
        <div>
            <div className="flex border-2 p-2 rounded-md"> 
            <Button color="error">Letest</Button>
            <Marquee direction="left" speed={50}>
                <p>
                    This is letest news of all the country and the whole world.....
                </p>
            </Marquee>
            </div>
        </div>
    );
};

export default BreakingNews;