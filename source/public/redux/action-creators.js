import { browserHistory } from 'react-router';
import actionTypes from './actions'

export function setImage (image) {
	return dispatch => {
		browserHistory.push(`/work/${image.filename}`);
		dispatch({
			type: actionTypes.SET_IMAGE,
			image
		})
	}
}

export function markThumbnailsPreloaded (status) {
	return {
		type: actionTypes.MARK_THUMBNAILS_PRELOADED,
		status
	}
}