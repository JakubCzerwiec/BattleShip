const shipFactory = require('./shipsFactory');

it('name', () => {
    expect(shipFactory.model(4, 'aa')).toBe('aa')
})