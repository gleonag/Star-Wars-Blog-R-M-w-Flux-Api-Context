import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import Personaje from "../component/Character";

export const Single = props => {
	const { store, actions } = useContext(Context);

	cont[Personaje, setPersonaje] = useState([])

	const params = useParams();

	return 
};

Single.propTypes = {
	match: PropTypes.object
};
