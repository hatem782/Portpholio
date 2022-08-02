import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  loading: {
    height: "100vh",
    width: "100vw",
    backgroundColor: theme.palette.background.dark,

    position: "absolute",
    top: "0px",
    left: "0px",
    zIndex: "9999",

    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    animation: "LoadingFadeOut 0.2s linear 2s forwards",
  },
  logo: {
    height: "200px",
    transform: "scale(0)",
    animation: "ImagePopup 2s linear 0s forwards",
  },
}));
