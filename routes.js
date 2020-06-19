//Router to increment blog count if it exists, otherwise creates new blog document
router.route('/count/:blog')
.options(cors.corsWithOptions, (req, res) => { res.sendStatus(200); })
.post(cors.cors, (req,res,next) => {
	Blogcount.findOneAndUpdate({"blog": req.params.blog}, {$inc: { 'count': 1}})
	.then((blogcount) => {
		if (blogcount) {
				 console.log('Blog updated ');
				 res.statusCode = 200;
				res.setHeader('Content-Type', 'application/json');
				res.json(blogcount);
		}
		else {
			Blogcount.create({"blog": req.params.blog, "count": 1})
			.then((blogcount) => {
				console.log('Blog count created ', blogcount);
				res.statusCode = 200;
				res.setHeader('Content-Type', 'application/json');
				res.json(blogcount);
			})
		}
	}, (err) => next(err))
	.catch((err) => next(err));
});

//Checks if search terms exist and increment them if so, otherwise saves search terms
Search.findOneAndUpdate({"terms": terms}, {$inc: { 'count': 1}})
	.then((search) => {
		if (search) {
				 console.log('Search updated ', search);
		}
		else {
			Search.create({"terms": terms, "count": 1,
			"route": req.originalUrl})
			.then((search) => {
				console.log('Search created ', search);
			})
		}
	})
