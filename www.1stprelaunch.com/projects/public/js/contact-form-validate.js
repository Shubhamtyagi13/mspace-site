$('.frm')
	.bootstrapValidator({
		message: 'This value is not valid',
		feedbackIcons: {
			valid: 'glyphicon glyphicon-ok',
			invalid: 'glyphicon glyphicon-remove',
			validating: 'glyphicon glyphicon-refresh'
		},
		fields: {
			'Name': {
				message: 'Name not valid',
				validators: {
					notEmpty: {
						message: 'Name is required'
					}
				}
			},
			'Email': {
				message: 'Email not valid',
				validators: {
					notEmpty: {
						message: 'Email is required'
					},
					emailAddress: {
						message: 'Invalid email'
					}
				}
			},
			'Mobile': {
				message: 'Mobile not valid',
				validators: {
					notEmpty: {
						message: 'Mobile is required'
					}
				}
			},
			'City': {
				message: 'City not valid',
				validators: {
					notEmpty: {
						message: 'City is required'
					}
				}
			},
			'Message': {
				message: 'Message not valid',
				validators: {
					notEmpty: {
						message: 'Message is required'
					}
				}
			}
		}
	})