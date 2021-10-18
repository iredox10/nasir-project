const Staff = require('../model/addStaffModel')
exports.get_home = (req, res) => {
	res.render('home');
};

// ! log in controller
exports.get_log_in = (req, res) => {
	res.render('log-in');
};
exports.post_log_in = async (req, res) => {
	try {
		const staffId = await Staff.findOne({ staffId: req.body.staffId });
		const password = await Staff.findOne({ password: req.body.password });

		if (staffId && password) {
			res.render('staff-page', { staff:staffId });
		}else{
            res.send('username or password incorrect')
        }
	} catch (err) {
		console.log(err);
	}
};

// ! admin controller
exports.get_admin = (req, res) => {
	res.render('admin');
};

exports.get_add_staff = (req, res) => {
	res.render('add-staff');
};

exports.post_add_staff = async (req, res) => {
	const newStaff = new Staff({
		firstName: req.body.firstName,
		lastName: req.body.lastName,
		surName: req.body.surName,
		staffId: req.body.staffId,
		department: req.body.department,
		password: req.body.password,
	});

	try {
		const staff = await newStaff.save();
		res.redirect('/admin');
	} catch (err) {
		console.log(err);
	}
};

exports.get_staffs = async (req,res) =>{
    try{
        const staffs = await Staff.find()
        res.render('view-staffs', {staffs})
    }catch(err) {
        console.log(err)
    }
}
