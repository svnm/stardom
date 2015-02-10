var Post = Model( 'Post' );
var Application = require( CONTROLLER_DIR + '/application' );

module.exports = Application.extend({

  init : function ( before, after ){
    after( this.validation, { only : [ 'create', 'update' ]});
    after( this.unique,     { only : [ 'create', 'update' ]});
    after( this.no_content, { except : [ 'new', 'create', 'index' ]});
  },

  'new' : function ( req, res, next ){
    res.render( 'posts/new' );
  },

  create : function ( req, res, next ){
    Post.create_or_update( new Post(), req.body.post,
      function ( err, post ){
        if( err ) return next( err );

        req.flash( 'flash-info', 'Post created' );
        res.redirect( '/posts/' + post._id );
      });
  },

  index : function ( req, res, next ){
    Post.find( function ( err, posts ){
      if( err ) return next( err );

      res.render( 'posts/index', {
        posts : posts
      });
    });
  },

  show : function ( req, res, next ){
    Post.findById( req.params.id , function ( err, post ){
      if( post ){
        return res.render( 'posts/show', {
          post : post
        });
      }

      req.msg = 'User';
      next( err );
    });
  },

  edit : function ( req, res, next ){
    Post.findById( req.params.id , function ( err, post ){
      if( post ){
        return res.render( 'posts/edit', {
          post : post
        });
      }

      req.msg = 'User';
      next( err );
    });
  },

  update : function ( req, res, next ){
    Post.findById( req.params.id , function ( err, post ){
      if( post ){
        return Post.create_or_update( post, req.body.post,
          function ( err, post ){
            if( err ) return next( err );

            req.flash( 'flash-info', 'Post updated' );
            res.redirect( '/posts/' + post._id );
          });
      }

      req.msg = 'User';
      next( err );
    });
  },

  destroy : function ( req, res, next ){
    Post.findById( req.params.id , function ( err, post ){
      if( post ){
        return post.remove( function ( err, post ){
          if( err ) return next( err );

          req.flash( 'flash-info', 'Post deleted' );
          res.redirect( '/posts' );
        });
      }

      req.msg = 'User';
      next( err );
    });
  }
});
