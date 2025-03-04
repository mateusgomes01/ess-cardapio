import React, {Fragment, useState} from "react";

import Add from "./Add";
import Category from "./Category";
import ConfimationBox from "./ConfimationBox";
import Item from './Item';

import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import DeleteIcon from '@mui/icons-material/Delete';
import Divider from '@mui/material/Divider';
import SettingsIcon from '@mui/icons-material/Settings';
import Typography from '@mui/material/Typography';


const Menu = ({
    isMenu, 
    category,
    setCategory,
    setAlert, 
    setAlertContent,
    setAlertWarning, 
    open, 
    setOpen, 
    showItems, 
    setShowItems
}) => {
    
    const [toDelete, setToDelete] = useState([]);
    
    const [openPopUp, setOpenPopUp] = useState(false);

    const handleDeleteAll = () => {
        setOpenPopUp(toDelete.length > 0 ? true : false);     
    }

    return (
        <div className="MenuItems">
            <Add
                open={open}
                setAlert={setAlert}
                setAlertContent={setAlertContent}
                setAlertWarning={setAlertWarning}
                setOpen={setOpen}
                showItems={showItems} 
                setShowItems={setShowItems}
            />

            <Category
                open={category}
                setOpen={setCategory}
                showItems={showItems} 
                setShowItems={setShowItems}
            />
            
            <ConfimationBox
                dataList={toDelete}
                openPopUp={openPopUp}
                setAlert={setAlert}
                setAlertContent={setAlertContent}
                setAlertWarning={setAlertWarning}
                setOpenPopUp={setOpenPopUp}
                setShowItems={setShowItems}
            />

            {!isMenu
                ?
                <div sx={!isMenu ? {marginLeft: 5, minWidth: 340} : {  minWidth: 340 }} className="navigation"> 
                    <Button variant="contained" size="small" startIcon={<AddIcon />}onClick={() => setOpen(true)}>Add</Button>
                    <Button variant="contained" size="small" startIcon={<DeleteIcon />} onClick={() => handleDeleteAll()}>Delete</Button>
                    <Button variant="contained" size="small" startIcon={<SettingsIcon />}onClick={() => setCategory(true)}>Category</Button>
                </div>
                
                : null
            }

            {typeof showItems !== 'undefined' && Array.isArray(showItems) && showItems.map((item) => {
                return(
                    <Item
                        isMenu={isMenu}
                        id={item.id} 
                        description={item.description}
                        name={item.name}
                        price={item.price}
                        setAlert={setAlert}
                        setAlertContent={setAlertContent}
                        setAlertWarning={setAlertWarning}
                        showItems={showItems} 
                        setShowItems={setShowItems}
                        toDelete={toDelete}
                        setToDelete={setToDelete}
                        openPopUp={openPopUp}
                        setOpenPopUp={setOpenPopUp}
                    />
                );
            })}


            {isMenu && typeof showItems !== 'undefined' && !Array.isArray(showItems) && Object.entries(showItems).map(([category, itens]) => {
                const menu = itens.map((item) => {
                    return(
                        <Item
                            isMenu={isMenu}
                            id={item.id} 
                            description={item.description}
                            name={item.name}
                            price={item.price}
                            setAlert={setAlert}
                            setAlertContent={setAlertContent}
                            setAlertWarning={setAlertWarning}
                            showItems={showItems} 
                            setShowItems={setShowItems}
                            toDelete={toDelete}
                            setToDelete={setToDelete}
                            openPopUp={openPopUp}
                            setOpenPopUp={setOpenPopUp}
                        />
                   );
                })
                return (
                    <Fragment>
                        <div style={{backgroundColor:  'rgb(255, 153, 153)', marginBottom: 10}}>
                    
                            <Card variant="outlined" sx={!isMenu ? {marginLeft: 5, minWidth: 340} : {  minWidth: 340}}>
                                <CardContent>
                                    <Typography align="center" variant="h5" component="div">
                                        {category}
                                    </Typography>
                                </CardContent>
                            </Card>
                            <Divider sx={!isMenu ? {marginLeft: 5, minWidth: 340} : {  minWidth: 340}} />
                            {menu}
                        </div>
                    </Fragment>
                )})}

        </div>
    );
}

export default Menu; 
