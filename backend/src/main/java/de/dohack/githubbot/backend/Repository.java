package de.dohack.githubbot.backend;

public class Repository {

    private String repoName;
    private String creator;
    private String teammateOne;
    private String teammateTwo;
    private String teammateThree;
    private String teammateFour;
    private String description;

    public Repository() {
    }

    public String getRepoName() {
        return repoName;
    }

    public void setRepoName(String repoName) {
        this.repoName = repoName;
    }

    public String getCreator() {
        return creator;
    }

    public void setCreator(String creator) {
        this.creator = creator;
    }

    public String getTeammateOne() {
        return teammateOne;
    }

    public void setTeammateOne(String teammateOne) {
        this.teammateOne = teammateOne;
    }

    public String getTeammateTwo() {
        return teammateTwo;
    }

    public void setTeammateTwo(String teammateTwo) {
        this.teammateTwo = teammateTwo;
    }

    public String getTeammateThree() {
        return teammateThree;
    }

    public void setTeammateThree(String teammateThree) {
        this.teammateThree = teammateThree;
    }

    public String getTeammateFour() {
        return teammateFour;
    }

    public void setTeammateFour(String teammateFour) {
        this.teammateFour = teammateFour;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    @Override
    public String toString() {
        return "Repository{" +
                "repoName='" + repoName + '\'' +
                ", creator='" + creator + '\'' +
                ", teammateOne='" + teammateOne + '\'' +
                ", teammateTwo='" + teammateTwo + '\'' +
                ", teammateThree='" + teammateThree + '\'' +
                ", teammateFour='" + teammateFour + '\'' +
                ", description='" + description + '\'' +
                '}';
    }
}
