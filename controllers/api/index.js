const router = require('express').Router();
const userRoutes = require('./userRoute');
const blogRoutes = require('./blogRoute');
const commentRoutes = require('./commentRoute')

router.use('/users', userRoutes);
router.use('/comments', commentRoutes);
router.use('/blogs', blogRoutes);

module.exports = router;
