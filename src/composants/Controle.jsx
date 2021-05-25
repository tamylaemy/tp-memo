import './Controle.scss';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import * as crudTaches from '../services/crud-taches';
import { useEffect } from 'react';

export default function Controle({etatTaches, utilisateur, completee, supprimerToutesTaches, idColl}) {
  

  const [taches, setTaches] = etatTaches;
  const uid = utilisateur.uid;

  const nbTaches = taches.filter(t => t.completee == false).length;

  /* //Supprimer toutes les tâche complétée
    function supprimerToutesTaches(idColl){
      crudTaches.supprimerTout(uid, idColl, completee).then(
        () => {
          setTaches(taches.filter(task => {
            return task.id !== idColl
          }))
        }
      )
    } */

  return (
    <footer className="Controle">
      <ToggleButtonGroup 
        size="small" 
        exclusive={true} 
      >
        <ToggleButton value={'toutes'}>Toutes</ToggleButton>
        <ToggleButton value={true}>Complétées</ToggleButton>
        <ToggleButton value={false}>Actives</ToggleButton>
      </ToggleButtonGroup>
      <span className="compte">
        {nbTaches} tâches restantes
      </span>
      <IconButton 
        aria-label="delete" 
        size="small" 
        variant="contained" 
        color="secondary" 
        /* onClick={() => supprimerToutesTaches(idColl)} */
        title="Supprimer les tâches complétées"
      >
        <DeleteIcon fontSize="small" />
      </IconButton>
    </footer>
  );
}