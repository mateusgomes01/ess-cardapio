import React from "react";
import {useNavigate} from "react-router-dom";

import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from '@mui/material/Button';

const Share = () => {

    let navigate = useNavigate ();

    const handleClose = () => {
        navigate("/");
    };

    return (

        <div>
            <Dialog open={true} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Share</DialogTitle>
                <DialogContent>
                    <p> Share Icon here </p>
                </DialogContent>

                <DialogActions>
                    <Button variant="outlined" onClick={handleClose}>Cancel</Button>
                    <Button variant="contained" type="submit">Share</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default Share;