module.exports = {

  statics : {

    create_or_update : function ( post, props, callback ){
      post.title = props.title;
      post.content = props.content;
      post.is_public = props.is_public;
      post.save( callback );
    }
  }
};
