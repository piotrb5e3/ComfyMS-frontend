import {moduleFor, test} from 'ember-qunit';

moduleFor('controller:post/edit', 'Unit | Controller | post/edit', {
  needs: ['service:metrics', 'service:session']
});

test('it exists', function (assert) {
  let controller = this.subject();
  assert.ok(controller);
});
