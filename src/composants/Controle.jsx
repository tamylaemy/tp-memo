import './Controle.scss';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import * as crudTaches from '../services/crud-taches';

export default function Controle({etatTaches, utilisateur, supprimerToutesTaches}) {
  

  const [taches] = etatTaches;
  const uid = utilisateur.uid;

  const nbTaches = taches.filter(t => t.completee === false).length;

  //Supprimer toutes les tâche complétée

  return (
    <footer className="Controle">
      <ToggleButtonGroup 
        size="small" 
        exclusive={true} 
      >
        <ToggleButton value={'toutes'} onClick={() =>
        crudTaches.lireTout(uid)}>Toutes</ToggleButton>
        <ToggleButton value={true} onClick={() =>
        crudTaches.lireCompletee(uid)}>Complétées</ToggleButton>
        <ToggleButton value={false} onClick={() => crudTaches.lirePasCompletee(uid)}>Actives</ToggleButton>
      </ToggleButtonGroup>
      <span className="compte">
        {nbTaches} tâches restantes
      </span>
      <IconButton 
        aria-label="delete" 
        size="small" 
        variant="contained" 
        color="secondary" 
        onClick={() => crudTaches.supprimerTout(uid)}
        title="Supprimer les tâches complétées"
      >
        <DeleteIcon fontSize="small" />
      </IconButton>
    </footer>
  );
}