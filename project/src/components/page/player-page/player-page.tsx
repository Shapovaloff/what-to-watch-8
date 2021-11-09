import {useHistory, useParams} from 'react-router-dom';
import {getFilm} from '../../../utils';
import {Params} from '../../../types/types';
import {connect, ConnectedProps} from 'react-redux';
import {State} from '../../../types/state';

const mapStateToProps = ({films}: State) => ({
  films,
});

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

function PlayerPage({films}: PropsFromRedux): JSX.Element {
  const {id} = useParams() as Params;
  const film = getFilm(films, Number(id));
  const {posterImage, name} = film;
  const history = useHistory();

  const handleButtonClick = () => {
    history.goBack();
  };

  return (
    <div className="player">
      <video src="#" className="player__video" poster={posterImage} />

      <button type="button" className="player__exit" onClick={handleButtonClick}>Exit</button>

      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress className="player__progress" value="30" max="100"></progress>
            <div className="player__toggler" style={{left: '30%'}}>Toggler</div>
          </div>
          <div className="player__time-value">1:30:29</div>
        </div>

        <div className="player__controls-row">
          <button type="button" className="player__play">
            <svg viewBox="0 0 19 19" width="19" height="19">
              <use xlinkHref="#play-s" />
            </svg>
            <span>Play</span>
          </button>
          <div className="player__name">{name}</div>

          <button type="button" className="player__full-screen" >
            <svg viewBox="0 0 27 27" width="27" height="27">
              <use xlinkHref="#full-screen" />
            </svg>
            <span>Full screen</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export {PlayerPage};
export default connector(PlayerPage);
