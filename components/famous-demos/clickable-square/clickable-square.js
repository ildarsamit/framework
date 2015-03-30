BEST.component('famous-demos:clickable-square', {
    tree: 'clickable-square.html',

    behaviors: {
        '#context': {
            'size': [200, 200],
            'position': function(position) {
                return position;
            },
            '$if': function() {
                return true;
            }
        },
        '#square': {
            '$repeat': function() {
                return [
                    { id: 'a' },
                    { id: 'b' },
                    { id: 'c' }
                ];
            },
            'template': function(count) {
                return { count: count };
            },
            'style': function(backgroundColor) {
                return {
                    'background-color': backgroundColor,
                    'cursor': 'pointer',
                    'color': 'black',
                    'border': '2px solid black'
                };
            },
            'unselectable': true
        }
    },

    events: {
        public: {
            'handle-click': function(state) {
                state.set('count', state.get('count') + 1);
            },
            'change-color': function(state, message) {
                state.set('backgroundColor', message);
            },
            'position': function(state, message) {
                state.set('position', message);
            }
        }
    },

    states: {
        count: 0,
        backgroundColor: 'gray',
        position: [0, 0, 0]
    }
});
