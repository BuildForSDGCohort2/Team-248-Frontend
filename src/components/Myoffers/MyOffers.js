import React, { useEffect } from "react";
import { Container } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import AccessAlarmIcon from "@material-ui/icons/AccessAlarm";
import History from "../../routes/History";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Fade from "@material-ui/core/Fade";
import messages from "../../assets/Local/messages";
import AlertDialog from "../AlertDialog/AlertDialog";
import FormDialog from "../FormDialog/FormDialog";
import { UpdateOffer } from "../UpdateOffer/UpdateOffer";
import { CustomSnackbar } from "../CustomSnackbar";
import { axiosInstance } from "../../network/apis";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    "&:hover": {
      cursor: "pointer"
    }
  },
  paper: {
    padding: theme.spacing(2),
    margin: "auto",
    maxWidth: 500,
	},
	dividerMargin: {
		marginBottom: "15px"
	},
	cardHeader:{
		backgroundColor: "#f1f1f1",
		padding: "15px 0"
	},
	green: {
		color: "green"
  },
  status: {
    margin: 0
  }
}));

const SnackbarAnchorOrigin = {
  vertical: "top",
  horizontal: "center"
};

export const MyOffers = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const menuOpen = Boolean(anchorEl);
  const [DialogOpen, setDialogOpen] = React.useState(false);
  const [UpdateOfferDialogOpen, setUpdateOfferDialogOpen] = React.useState(false);
  const [SnackbarOpen, setSnackbarOpen] = React.useState(false);
  const [snackBarMessage, setSnackbarMessage] = React.useState("");
  const [offers, setOffers] = React.useState([]);
  const token = localStorage.getItem('token');
  const FEXED_WORK_HOURS_PER_DAY = 4; // this is temperory

  const handleCardClick = (offerId) => {
    return History.push(`/offers/${offerId}`);
  };

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleDialogClose = () => {
    setDialogOpen(false);
  };
  
  const handleDialogConfirm = (index) => {
    setDialogOpen(false);
    offers.splice(index-1, 1);
    setSnackbarMessage("Deleted Successfully");
    setSnackbarOpen(true);
    return History.push("/profile");
  };

  const handleUpdateOfferDialogClose = () => {
    setUpdateOfferDialogOpen(false);
  };

  const handleUpdateOfferDialogConfirm = () => {
    return History.push("/profile");
  };

  const handleMenuClose = (event) => {
    setAnchorEl(null);
    if(event.currentTarget.dataset.action === "delete"){
      setDialogOpen(true);
    } else if(event.currentTarget.dataset.action === "edit"){
      setUpdateOfferDialogOpen(true);
    }
  };

  const handleOpenSnackbar = (message) => {
    setSnackbarMessage(message);
    setSnackbarOpen(true);
  };

  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
  };

  useEffect(() => {
    axiosInstance.get(`/profile/offers`, { headers: { Authorization: `Bearer ${token}` } })
    .then((res) => {
      setOffers(res.data.data);
    }).catch(err => {
      console.log(err);
    });
  }, [token])

	return (
    <Container maxWidth="sm">
				<Card>
					<Typography className={classes.cardHeader} 
								gutterBottom variant="h5" component="h2" align="center">
						My Offers 
					</Typography>
					<CardContent>
            {offers.length === 0 && "You have no offers yet."}
						{offers.map((offer, index) => {
							return (
								<div className={classes.root} key={index}>
									<Grid container spacing={2}>
										<Grid item xs={12} sm container>
											<Grid item xs container direction="column" spacing={2}>
												<Grid item xs onClick={() => handleCardClick(offer.id)}>
													<Typography gutterBottom variant="subtitle1">
														{offer.title}
													</Typography>
													<Typography variant="body2" gutterBottom>
														{offer.description}
													</Typography>
													<Typography variant="body2" color="textSecondary">
													Duration: From {offer.start_at} to {offer.end_at}
													</Typography>
												</Grid>
												<Grid item>
												</Grid>
											</Grid>
											<Grid item>
												<Typography variant="subtitle1">
                          ${offer.price_per_hour * FEXED_WORK_HOURS_PER_DAY}
                        </Typography> 
												{offer.status.code === "accepted" && <div> <CheckCircleOutlineIcon className={classes.green}/>
                          <p className={classes.status}>{offer.status.name}</p></div>}
												{offer.status.code === "new" && <div> <AccessAlarmIcon color="primary"/> 
                          <p className={classes.status}>{offer.status.name}</p></div>}
											</Grid>
											<Grid item>
                        <IconButton
                          aria-label="more"
                          aria-controls="long-menu"
                          aria-haspopup="true"
                          onClick={handleMenuClick}
                        >
                          <MoreVertIcon />
                        </IconButton>
                        <Menu
                          id="long-menu"
                          anchorEl={anchorEl}
                          keepMounted
                          open={menuOpen}
                          TransitionComponent={Fade}
                          onClose={handleMenuClose}
                        >
                          <MenuItem onClick={handleMenuClose} data-action="edit">
                            Edit
                          </MenuItem>
                          {/* { offer.status === "Pendding" && */}
                            <MenuItem onClick={handleMenuClose} data-action="delete">
                              Delete
                            </MenuItem>
                          {/* } */}
                        </Menu>
                      </Grid>
										</Grid>
									</Grid>
									{offers.length - 1 !== index && <Divider className={classes.dividerMargin}/>} 
                  <AlertDialog
                    open={DialogOpen}
                    content={messages.en.Profile.DeleteOffer}
                    handleClose={handleDialogClose}
                    handleConfirm={() => handleDialogConfirm(offer.id)}
                    />
                  <FormDialog
                    open={UpdateOfferDialogOpen}
                    content={
                      <UpdateOffer 
                        offer={offer} 
                        setSnackbar={handleOpenSnackbar}
                        closeDialog={handleUpdateOfferDialogClose}
                      />}
                    handleClose={handleUpdateOfferDialogClose}
                    handleConfirm={handleUpdateOfferDialogConfirm}
                    renderActions={false}
                    />
								</div>
							);
						})}
					</CardContent>
				</Card>
        <CustomSnackbar
          anchorOrigin={SnackbarAnchorOrigin}
          open={SnackbarOpen}
          handleClose={handleCloseSnackbar}
          message={snackBarMessage}
        />
			</Container>
    );
};
