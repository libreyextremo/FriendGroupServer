const mocha = require('mocha');
const assert = require('assert');
const FriendModel = require('../models/friend_model');

describe('FriendGroup collection tests', function(){

  //tests
  it('saving a record in friend collection', function(){
    var friendRecord = new FriendModel({
      id: 1,
      comments: [
        {
          id: 1,
          created: '2017-11-20T06:58:59.676178Z',
          modified: '2017-11-20T06:58:59.676418Z',
          subject: 'Saepe sit autem quia necessitatibus nobis animi mollitia.',
          body: 'Repudiandae id temporibus laudantium quod eligendi totam. Architecto accusamus dolor. Magni tempora blanditiis rerum ex. Odio sapiente architecto vero. Dignissimos ducimus nobis maxime corrupti ex impedit. Eligendi nam odit possimus aspernatur ipsa adipisci. Ducimus reiciendis magnam totam rerum quo.',
          status: 'N',
          rating: 4,
          user: 'Frederick Davies',
          consultant: 1
        },
        {
          id: 2,
          created: '2017-11-20T06:58:59.678850Z',
          modified: '2017-11-20T06:58:59.679010Z',
          subject: 'Cupiditate voluptates sint nobis tempora ratione impedit et.',
          body: 'Sequi ex laudantium qui nisi. Magni cupiditate atque laboriosam modi nostrum ut. Facere dignissimos dolore id doloremque aspernatur aut. Commodi commodi ducimus nesciunt explicabo repudiandae. Debitis doloremque provident dolorem cumque minima perspiciatis eum. Laudantium explicabo quas hic atque harum assumenda. Dolore tempore voluptate ab fuga possimus repudiandae. Totam minus sit nam fugiat ducimus adipisci. Maxime expedita quis facilis assumenda repudiandae sequi.',
          status: 'N',
          rating: 0,
          user: 'Elliot Cook',
          consultant: 1
        }
      ],
      created: '2017-11-20T06:58:59.659606Z',
      modified: '2017-11-20T06:58:59.673221Z',
      uuid: '93793c62-7182-c724-e090-aae5e1adaeeb',
      email: 'beverleyobrien@hotmail.com',
      short_name: 'Hugh',
      full_name: 'Iain Foster',
      date_joined: '2017-11-20T06:58:59.659636Z',
      status: 'A',
      gender: 'M',
      short_me: 'Deserunt neque dolorum doloribus perferendis enim.',
      location: '245 Johnson mountain\nEast Graham\nW8 2SS',
      profile_picture: 'https://randomuser.me/api/portraits/men/1.jpg'
    });

    friendRecord.save().then(function() {
      assert(friendRecord.isNew === false);
      done();
    });
  });

});
