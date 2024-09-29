import app from "./server";

const StartServer = () => {
  console.log(process.env.PORT);
  app.listen(process.env.PORT || 3001, () => {
    console.log("Server Started");
  });
};

export default StartServer;
