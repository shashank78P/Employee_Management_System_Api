import app from "./server";

const StartServer = () => {
    app.listen(process.env.PORT || 3001, () => {
        console.log("Server Started");
    });
}

export default StartServer