import app from "./server";

const StartServer = () => {
    app.listen(3001, () => {
        console.log("listening on 3001");
    });
}

export default StartServer