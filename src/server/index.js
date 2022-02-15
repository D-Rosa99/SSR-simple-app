import express from "express";
import router from "./routers";

const app = express();

const PORT = 3000;

app.use(express.static("public"));
app.use(router);

app.listen(PORT, console.log(`Server is running in port ${PORT}`));

export default app;
